function getCurrentTime() {
  var currentDate = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

  var dateObject = new Date(currentDate);

  var year = dateObject.getFullYear();
  var month = String(dateObject.getMonth() + 1).padStart(2, "0");
  var day = String(dateObject.getDate()).padStart(2, "0");
  var hours = String(dateObject.getHours()).padStart(2, "0");
  var minutes = String(dateObject.getMinutes()).padStart(2, "0");
  var seconds = String(dateObject.getSeconds()).padStart(2, "0");

  var dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  console.log(dateTimeString);
  return dateTimeString;
}

console.log(getCurrentTime());
