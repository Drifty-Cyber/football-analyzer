import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of 'MatchReader' and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let chelseaWins: number = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Chelsea' && match[5] === MatchResult.HomeWin) {
    chelseaWins++;
  } else if (match[2] === 'Chelsea' && match[5] === MatchResult.AwayWin) {
    chelseaWins++;
  }
}

console.log(`Chelsea won ${chelseaWins} games`);
