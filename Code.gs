var SHEET_URL = 'https://docs.google.com/spreadsheets/d/18jTQHZSrKJRLpE9T4Z-KLFB91haUaH-jaltVVZ8Vzss/edit#gid=0';

function doGet(e) {
  Logger.log(e.parameter);
  return HtmlService.createHtmlOutputFromFile('Page');
}

function userClicked(symptoms,diet){
  var spreadsheet = SpreadsheetApp.openByUrl(SHEET_URL);
  var sheet = spreadsheet.getSheets()[0];
  sheet.appendRow([new Date(),symptoms,diet]);
}
