const axios = require("axios");
const fs = require("fs");

var index = 124;

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
  9491657273, 9676075326, 9573769025, 9515974374, 7095709528, 8897072760, 7674024532, 8185903566, 8330985505,
  9441460023, 7396630545, 9849279970, 9908929475, 6304688417, 9160225161, 9705714853, 9959407971, 9502262840,
  9347989246, 7218234369, 8309401091, 9173307411, 9346856668, 9392991765, 9502843867, 9182261961, 9492695911,
  8688770063, 9603160770, 9440167299, 6301365201, 7095737601, 9010272041, 9866652413, 9390432502, 9492700443,
  7989815551, 9160257522, 9652430814, 7013439844, 9989719359, 9908346909, 9866196296, 9110572263, 7036603356,
  8096670015, 9284813121, 7702492771, 7989917404, 9676210100, 8886482391, 8106966201, 7989414298, 9948607686,
  9391539683, 9676484304, 9701193417, 9603399863, 9573830025, 9398564342, 9704432847, 8466078033, 9391252467,
  9963074480, 9014101069, 8790012685, 9705857603, 9963565863, 8639539085, 9391262280, 8790683415, 7989040073,
  8374026985, 8919674827, 6301472082, 7997575961, 9505192775, 9493655914, 9553597875, 8374900618, 8328209801,
  8309443419, 9493557599, 6281954627, 7095396099, 8309852636, 9494305771, 8341526406, 9573197414, 9701335933,
  9346252241, 8309429885, 9000920330, 9640239060, 8333043874, 9666834982, 9704062791, 9391726880, 9949171182,
  9490661101, 9959873663, 9160027442, 9703970189, 9381080278, 9618459959, 9573904413, 9676590868, 8985117170,
  8985225140, 8106560938, 9390486023, 8555910690, 8179385394, 9391559146, 7013639143, 9392303700, 8341958067,
  7036837421, 9440804770, 6300104260, 7893130776, 9866627101, 9550957046, 9059512209, 8106560680, 9440372711,
  9391701300, 7396417287, 9390184674, 9491466189, 9441228090, 9951883017, 6281714941, 9603918967, 9948632908,
  7661998979, 9440847831, 9640466237, 8341505895, 7013652040, 9059836110, 9652491608, 6281748090, 6281873161,
  9505904619, 9705688153, 9177666983, 9666003749, 8466098771, 7036065018, 9515203635, 9010329322, 8374344041,
  9542546278, 9676199858, 9640452816, 7981051048, 9381216538, 7993323124, 9160378676, 7660912432, 7794810093,
  8008629516, 9542574013, 9908714180, 7993713236, 9390900055, 9515315346, 8688290691, 9441382091, 9885060506,
  7659970360, 8897173396, 8357562465, 9177164128, 9010107968, 9866607033, 9640718238, 7702255231, 8790131496,
  9701978027, 7658926601, 9492368823, 7661006836, 9949171721, 9000591431, 9010840024, 9948251719, 6305311453,
  9849856814, 9701746449, 8096908461, 7670883620, 9441458985, 9502046549, 8466885182, 7893753776, 9381014560,
  8341060511, 8247888985, 9182000201, 9154798794, 9492342491, 9390949646,
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
      printCount(index);
      setTimeout(() => {
        processPhoneNumber(index + 1);
      }, getRandomDelay() * 1000);
    })
    .catch((error) => {
      console.error("Error processing phone number:", error);
    });
}

processPhoneNumber(index);
