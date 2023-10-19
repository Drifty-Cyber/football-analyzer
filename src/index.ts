import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReports';
import { HtmlReport } from './reportTargets/HtmlReports';

// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of 'MatchReader' and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Chelsea'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
