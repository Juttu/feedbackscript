const axios = require("axios");
const fs = require("fs");

var index = 66;

const locationList = [
  "VINAYAK CHOWCK",
  "BHUKTHAPUR",
  "khanapur",
  "raithubazar",
  "vinayak chowck",
  "adilabad",
  "satnala bustand",
  "Adilabad",
  "vinayak chowck",
  "Vinayak chowck",
  "New kummariwada",
  "adilabad",
  "SHIVAJI CHOWK",
  "Satnala bustand",
  "Khursheednagar",
  "adilabad ",
  "Satnala bustand",
  "Shanthinagar",
  "ashok road",
  "Satnala bustand",
  "vinayak chowck",
  "Shivaji chouk",
  "ntr chouk",
  "vinayak chowck",
  "vinayak chowck",
  "VINAYAK CHOWCK",
  "vidyanagar",
  "Vinayak chowck",
  "Ashok road",
  "ashok road",
  "ashok road",
  "ashok road",
  "ashok road",
  "Ashok road",
  "BUS STAND",
  "Prnjeesha",
  "satnala bustand",
  "Ashok road",
  "adilabad ",
  "Ntr chowk",
  "shivaji chowk",
  "bhukthapur ",
  "Shivaji chowk",
  "SHIVAJI CHOWK",
  "tirpelly",
  "gandhinagar",
  "Tirpelly",
  "takhur hotal",
  "Shivaji chowk",
  "ADILABAD ",
  "tilars colony",
];

const numbers3 = [
  9705714853, 8309401091, 8374026985, 9959873663, 9160027442, 9676590868, 8555910690, 9440372711, 6281714941,
  9177666983, 9666003749, 9542546278, 9640452816, 7661006836, 7893897161, 9014960352, 9494321435, 8897776196,
  8096803714, 9154799302, 8688347761, 8897331263, 9440704880, 9441865930, 7989694042, 9490916975, 9059811686,
  9110593269, 9963107520, 6305579772, 9133879387, 9177749615, 8008516143, 6300655614, 6281514901, 9959346177,
  9666098422, 7780539481, 7893399376, 9848020141, 8074917417, 6302738540, 8500026044, 9182074093, 9666588173,
  7660907270, 9010980366, 7282992965, 7729807059, 9440308220, 7286959413, 9391586147, 9346134692, 9494577297,
  9502346628, 9100571046, 9618538854, 9705824301, 9948800271, 8143879885, 8978899896, 9154411373, 6301253324,
  6304895210, 9494690347, 7702553963, 9866941863, 9290091993, 8125707281, 9490619522, 9963728403, 9912835715,
  9182461830, 9849860984, 9110555124, 9640131457, 6303167489, 9701194094, 9505351205, 8639644498, 9494310271,
  9247438404, 9704547673,
];

const phoneNumbers = numbers3.map((number) => number.toString());
const genderList = ["M", "F"];

function getCurrentTime() {
  var currentDate = new Date();

  var year = currentDate.getFullYear();
  var month = String(currentDate.getMonth() + 1).padStart(2, "0");
  var day = String(currentDate.getDate()).padStart(2, "0");
  var hours = String(currentDate.getHours()).padStart(2, "0");
  var minutes = String(currentDate.getMinutes()).padStart(2, "0");
  var seconds = String(currentDate.getSeconds()).padStart(2, "0");

  var dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log(dateTimeString);
  return dateTimeString;
}

function printCount(count) {
  console.log(
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588"
  );
  console.log(count);
  console.log(
    "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588"
  );
}
//Send request function
function sendRequest(res_phone, location_name, res_age, res_gender) {
  const sendOtpUrl = "https://ssvfurcity-api.sbmurban.org/ss/api/cf/phoneNumberExists/" + res_phone;
  const currentDateTime = getCurrentTime();

  const requestOptionsSendOTP = {
    method: "GET",
    url: sendOtpUrl,
    headers: {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 OPR/99.0.0.0",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    },
  };

  return axios(requestOptionsSendOTP)
    .then((response) => {
      console.log("GET request sent successfully:", response.data);

      return new Promise((resolve) => {
        setTimeout(() => {
          const bodyData = {
            m_ulb_id: "802896",
            is_resident: "Yes",
            location_name: location_name,
            res_phone: res_phone,
            res_title: "",
            res_name: "",
            res_age: res_age,
            res_gender: res_gender,
            cf_date: currentDateTime,
            cf_response: [
              {
                FQ1: "Y",
                FQ2: "Y",
                FQ3: "Y",
                FQ4: "Y",
                FQ5: "Y",
                FQ6: "Y",
                FQ7: "Y",
                FQ8: "5",
                FQ9: "5",
              },
            ],
            ss_period: "2023",
          };

          const requestOptions = {
            method: "POST",
            url: "https://ssvfurcity-api.sbmurban.org/ss/api/cf/web/save",
            headers: {
              "Content-Type": "application/json",
              "User-Agent":
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 OPR/99.0.0.0",
              Accept: "*/*",
              "Accept-Encoding": "gzip, deflate, br",
              Connection: "keep-alive",
            },
            data: bodyData,
          };

          console.log(bodyData.res_phone);
          console.log(bodyData.res_phone, bodyData.location_name, bodyData.res_age, bodyData.res_gender);

          printCount(bodyData.cf_date);

          axios(requestOptions)
            .then((response) => {
              console.log("POST request sent successfully:", response.data);
              resolve();
            })
            .catch((error) => {
              if (error.response && error.response.status !== 302) {
                writeNumbersToFile(res_phone);
                console.log(
                  `\u001b[1;31mPOST REQ - Something went wrong with error code ${error.response.status}\u001b[0m`
                );
              } else {
                console.log("\u001b[1;32mFeedback already submitted");
              }
              resolve();
            });
        }, getRandomDelay() * 1000); // Random delay between 4-8 seconds
      });
    })
    .catch((error) => {
      writeNumbersToFile(res_phone);
      console.log(`\u001b[1;31mGET REQ - Something went wrong with error code ${error.response.status}\u001b[0m`);
    });
}

function getRandomLocation() {
  const randomIndex = Math.floor(Math.random() * locationList.length);
  return locationList[randomIndex];
}

function getRandomAge() {
  return Math.floor(Math.random() * 11) + 20;
}

function getRandomGender() {
  const randomIndex = Math.floor(Math.random() * genderList.length);
  return genderList[randomIndex];
}

function getRandomDelay() {
  return Math.floor(Math.random() * 5) + 5; // Random delay between 4-8 seconds
}

function appendFileAsync(filename, data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filename, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function writeNumbersToFile(errNumber) {
  try {
    await appendFileAsync("errNumbers.txt", errNumber + "\n");
    console.log(`Successfully wrote number ${errNumber} to file.`);
  } catch (error) {
    console.error(`Error writing number ${errNumber} to file:`, error);
  }
}

function processPhoneNumber(index) {
  if (index >= phoneNumbers.length) {
    console.log("All phone numbers processed.");
    return;
  }
  console.log();
  console.log();
  console.log();

  const phoneNumber = phoneNumbers[index];
  const randomLocation = getRandomLocation();
  const randomAge = getRandomAge();
  const randomGender = getRandomGender();
  console.log(phoneNumber, randomLocation, randomAge, randomGender);
  sendRequest(phoneNumber, randomLocation, randomAge, randomGender)
    .then(() => {
      const trackCount = `${index}/${phoneNumbers.length}`;
      printCount(trackCount);
      setTimeout(() => {
        processPhoneNumber(index + 1);
      }, getRandomDelay() * 1000);
    })
    .catch((error) => {
      console.error("Error processing phone number:", error);
    });
}

processPhoneNumber(index);
