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

exports.doTheMagic = () => {
    let givenWeight = 44;
    let sortedDataByWeight = [];

    // Eliminating the combination by weight constraint
    for (let i = 0; i < data.length; i++) {
        if (data[i].weight <= givenWeight) {
            sortedDataByWeight.push(data[i]);
        }
    }
    let combinations = [];


    for (let i = 0; i < 20; i++) {
        let combination = [];
        let initial_combination_weight = 0;
        let breakLoop = false;
        while (!breakLoop) {
            let randomData = exports.getRandomArbitrary(sortedDataByWeight.length);
            let indexData = sortedDataByWeight[randomData];
            if (indexData.weight + initial_combination_weight <= givenWeight && (combination.findIndex(x => x.id === indexData.id)) === -1) {
                console.log(indexData.weight + initial_combination_weight);
                combination.push(indexData);
                initial_combination_weight += indexData.weight;
            } else {
                breakLoop = true;
            }
        }
        combinations.push(combination)
    }

    // Calculating total value of combinations
    let totalValue = [];
    for(let i =0 ; i< combinations.length ; i++){
        let value = 0 ;
        for(let j = 0 ; j < combinations[i].length ; j++){
            value += combinations[i][j].value
        }
        totalValue.push(value)
    }
    //Finding the highest value index
    let index = totalValue.indexOf(Math.max(...totalValue));


    return combinations
};

// For crossover -
//
exports.doCrossOver = () => {

};

app.get("/knapsack", function (req, res) {
    res.send(exports.doTheMagic())
});


const port = process.env.PORT || 7001;
app.listen(port);

console.log(`Knapsack Server listening on ${port}`);

module.exports.app = app;