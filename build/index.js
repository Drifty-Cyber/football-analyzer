"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const HtmlReports_1 = require("./reportTargets/HtmlReports");
// Create an object that satisfies the 'DataReader' Interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an instance of 'MatchReader' and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Chelsea'), new HtmlReports_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
