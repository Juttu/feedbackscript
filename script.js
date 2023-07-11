const axios = require("axios");
const fs = require("fs");

var index = 0;

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
  9949236057, 7569498465, 9959393564, 9640654423, 9346558604, 9959695210, 9493630943, 9440038944, 9133289970,
  9949353800, 7013435544, 8328052171, 6281537011, 8125149529, 7396314869, 8106498431, 8184905432, 7382111776,
  7036090082, 9441460063, 9652966825, 9912380481, 7093177281, 9949685048, 8374353833, 7601045088, 9515367292,
  9959976765, 8500026029, 9963818836, 8464882090, 9553517595, 9948386027, 7569062691, 9701950669, 6302971864,
  9494941196, 6281603244, 6305422382, 7780393420, 9515307962, 9391546145, 9014875922, 6301399470, 7671822826,
  8985205929, 8919733280, 9440805507, 7780732130, 9177140741, 8466096726, 9059938254, 9182292200, 9010876943,
  7675990238, 9177475052, 7382388767, 6300910570, 8106554951, 8179385838, 7901065237, 6301098976, 8106360511,
  9676877885, 6301700859, 7093727500, 9502592109, 9311275273, 9502525285, 9398631891, 9767585805, 9912784516,
  7286970309, 9182441152, 9491657273, 8106487455, 9701909480, 7854216985, 6303924886, 9550450710, 9391586476,
  9640448095, 9440437508, 9505282611, 9652104129, 7013531191, 8317697054, 7995034406, 6302088483, 9652109129,
  9849414772, 9381003010, 9704274918, 9493256828, 9347480603, 9010887522, 7075252661, 9908306372, 8919580206,
  7799332113, 9603560250, 9390283190, 9666486451, 9640104199, 9014461773, 9912058215, 9676075326, 9490876016,
  9640286105, 9440704871, 9849325689, 7893897083, 8179487710, 8074424844, 6304280641, 9014168885, 8888793550,
  9573769025, 9398183740, 9866143252, 9959152546, 9333720641, 9985116614, 7702891074, 6281813835, 9440978654,
  9949032443, 9959929846, 9392301205, 9000126673, 9494305300, 7032798895, 9618782811, 7731919307, 7569393296,
  8374843243, 6303538410, 8096148622, 9951908995, 8341380059, 7659075177, 8096351997, 7893214334, 7702877520,
  9440570105, 9966154623, 9949777295, 9989598341, 8106824062, 9618627770, 9959013033, 9948966601, 6300117613,
  9912083274, 9989058434, 9014700210, 9640110512, 7386293444, 8555079808, 9705604089, 9542200122, 9848344756,
  9010836160, 7288023588, 9951646741, 9849396891, 9963534438, 9390082400, 7893257154, 9948741546, 9502957876,
  9133107975, 9398578753, 9603197682, 8187006919, 7396853713, 9494017074, 7013502343, 9912590038, 9542749736,
  9959013260, 7382764203, 9381006531, 7702845493, 9701194254, 9010642706, 8008715701, 9059929070, 7780595825,
  8179378187, 9440949189, 9441458984, 9666037052, 7396328597, 9391660529, 8074005974, 9542345745, 9490597922,
  9618683631, 9454848845, 9493568761,
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
              console.error("Error sending POST request:", error);
              if (error.response && error.response.status !== 302) {
                writeNumbersToFile(res_phone);
              }
              resolve();
            });
        }, getRandomDelay() * 1000); // Random delay between 4-8 seconds
      });
    })
    .catch((error) => {
      writeNumbersToFile(res_phone);
      console.error("Error sending GET request:", error);
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
