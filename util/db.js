// // // create connection for Harper DB
// const harperive = require("harperive");
// // const configuration = {
// //   username: process.env.Hasna_,
// //   password: process.env.H@snasm2,
// //   schema: process.env.classroom,
// //   harperHost: process.env.hasna-25-hasna.harperdbcloud.com,
// // };
//  harperive.Client(configuration);
// module.exports = d// const db = newb;

// var request = require('request');
// var options = {
//   'method': 'POST',
//   'url': 'https://hasna-25-hasna.harperdbcloud.com',
//   'headers': {
//     'Content-Type': 'application/json',
//     'Authorization': 'Basic SGFzbmFfOkhAc25hc20y'
//   },
//   body: JSON.stringify({
//     "operation": "describe_all"
// })

// };
// request(options, function (error, response) { 
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://hasna-25-hasna.harperdbcloud.com',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Basic SGFzbmFfOkhAc25hc20y'
  },
  body: JSON.stringify({
    "operation": "create_schema",
    "schema": "dev"
})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});