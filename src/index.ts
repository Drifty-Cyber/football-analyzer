import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// Read file and assign to variable
const reader = new CsvFileReader('football.csv');
reader.read();
const matches = reader.data;

let manUnitedWins: number = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
