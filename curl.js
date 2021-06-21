module.exports = function curl(done, link) {
  const request = require("request");
  done(
    request(link, function (error, response, body) {
      console.error("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.

      // if (error) {
      //   done(error);
      // } else {
      //   done(("statusCode:", response && response.statusCode));
      //   done(("body:", body));
      // }
      // console.error('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
    })
  );
};

// Old Code That Works

// // const request = require(‘request’)
// function curl(link){
//   const request = require(‘request’);
//   request(link, function (error, response, body) {
//     console.error(‘error:’, error); // Print the error if one occurred
//     console.log(‘statusCode:’, response && response.statusCode); // Print the response status code if a response was received
//     console.log(‘body:’, body); // Print the HTML for the Google homepage.
//   });
// }
// module.exports = curl;
