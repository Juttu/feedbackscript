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
  9948323775, 9618172057, 9441254811, 9666172483, 9701119207, 9701977972, 9492561214, 9963381527, 7569016975,
  9640226633, 9848309224, 8465886066, 9133139180, 8008854309, 9505545637, 9705546891, 7893903269, 9440512365,
  9866752243, 9550752793, 9885398661, 9908247567, 9441626101, 9347705276, 7569015606, 9390762975, 9493633654,
  9963139290, 9059186448, 9110366708, 9059926143, 7981528301, 9959953583, 9490140754, 9000293449, 9502288098,
  9959572401, 9676872428, 7981871800, 9666255056, 9989499574, 8688370641, 9398845299, 8008721479, 9391525076,
  7702670261, 9347529973, 9701953545, 9390958096, 9550554916, 9392509522, 9640044504, 7013210332, 8106557962,
  7731011715, 7396976596, 9100767691, 9866246073, 9912717709, 9912160728, 9959868920, 7036993993, 8297479945,
  7702607899, 9949774841, 8374199028, 7416103234, 9676160402, 9573808773, 9381519516, 9177614533, 9177256615,
  9391587673, 9112534848, 9948736055, 9553764473, 9390924302, 7396748367, 9390556923, 9440916637, 7702647753,
  6302604058, 9618936270, 9441695034, 8008947674, 9573041763, 9652570619, 9908929338, 9705573415, 9704974714,
  9951713893, 9014531894, 9948209792, 9666097212, 8519942703, 9951085271, 9000114736, 9491466673, 8919148873,
  9618241454, 8096745110, 9014829432, 9346498396, 7997528819, 9390060149, 9347194997, 9666580554, 8978790897,
  9490025366, 9704860029, 9110780468, 9848616217, 7680897837, 9492199661, 9676985854, 9346433014, 8501936764,
  9247797750, 8897993980, 9948156186, 8523044741, 9948254070, 8185841179, 9618046066, 8309178670, 9441614566,
  9866832031, 9908443315, 9849357437, 7794055521, 8897158124, 7989909132, 9542146260, 8897579409, 8309249278,
  7993427603, 9381222048, 7995434644, 9848611879, 7997800324, 6300087597, 9391622102, 9553482538, 7995682106,
  9010131926, 7671882113, 9701718804, 9866654208, 8688867348, 7013473332, 7382388782, 9440012163, 8688097671,
  9010874017, 6305177912, 9640672393, 9390027445, 9704063055, 9391605106, 9963728361, 6303292933, 9493315351,
  9154063284, 8008124313, 6301139037, 8328142470, 9951232179, 8897019180, 9391990471, 6300884895, 9182897491,
  6304753104, 9014852730, 9247104963, 7075426545, 9030310514, 7013511750, 9440235248, 9701824770, 7989052132,
  6281667684, 9573868645, 6301692753, 9550363703, 7032827278, 6300492380, 8341140711, 8309820788, 8185004673,
  7981238352, 9490840892, 8374450657, 8179382001, 8341802313, 9441973242, 7993152104, 9010223479, 9676390603,
  7386000147, 9063603890, 9440948797,
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
