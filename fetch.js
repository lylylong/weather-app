let today = new Date();
let date =
  "/" +
  today.getFullYear() +
  "/" +
  (today.getMonth() + 1) +
  "/" +
  today.getDate() +
  "/";

// --------
const https = require("https");
let url = "https://www.metaweather.com/api/location/search/?query=toronto";
https.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    data = JSON.parse(data);
    console.log(data);
    console.log(data[0]);
    let woeid = data[0].woeid;
    console.log(woeid);
    url = "https://www.metaweather.com/api/location/" + woeid + date;
    https.get(url, (res) => {
      data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        data = JSON.parse(data);
        console.log(data[0]);
      });
    });
  });
});

// --------

// var url = "https://www.metaweather.com/api/location/search/?query=toronto";

// var result = fetch(url, {
//   method: "get",
// })
//   .then(function (response) {
//     return response.json(); // pass the data as promise to next then block
//   })
//   .then(function (data) {
//     var woeid = data.data[0].woeid;

//     console.log(woeid);

//     return fetch("https://www.metaweather.com/api/location/" + woeid + date);
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .catch(function (error) {
//     console.log("Request failed", error);
//   });

// // I'm using the result variable to show that you can continue to extend the chain from the returned promise
// result.then(function (r) {
//   console.log(r); // 2nd request result
// });
