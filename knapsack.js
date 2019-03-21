let express = require("express"),
    app = express(),
    cors = require('cors'),
    bodyParser = require("body-parser");

var exports = module.exports = {};

app.use(bodyParser.json({extended: true}));
app.use(cors());

exports.getRandomArbitrary = (max) => {
    return Math.floor(Math.random() * max);
};

let data = [
    {id: 1, value: 2, weight: 9},
    {id: 2, value: 12, weight: 2},
    {id: 3, value: 8, weight: 3},
    {id: 4, value: 22, weight: 99},
    {id: 5, value: 2, weight: 22},
    {id: 6, value: 66, weight: 34},
    {id: 7, value: 45, weight: 54},
    {id: 8, value: 11, weight: 23},
    {id: 9, value: 64, weight: 45},
    {id: 10, value: 34, weight: 23}
];

exports.knapsack = ()=> {
   let  aa = 50;
   let sortedWeght = [];
   for (let i=0; i <= data.length-1 ; i++){
       if(data[i].weight <= aa){
           sortedWeght.push(data[i]);
       }
   }
   let combinations[];

};

app.get("/knapsack", function (req, res) {
    res.send(exports.knapsack())
});


const port = process.env.PORT || 7001;
app.listen(port);

console.log(`Knapsack Server listening on ${port}`);

module.exports.app = app;