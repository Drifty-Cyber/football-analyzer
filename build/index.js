"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of 'MatchReader' and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let chelseaWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === 'Chelsea' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        chelseaWins++;
    }
    else if (match[2] === 'Chelsea' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        chelseaWins++;
    }
}
console.log(`Chelsea won ${chelseaWins} games`);
