const fs = require('fs');
const {
  LineItemStateCsvParser,
  AddReturnInfoCsvParser,
  DeliveriesCsvParser,
} = require('@commercetools/csv-parser-orders');

const parser = new LineItemStateCsvParser({
  logger: {
    error: console.error,
    warn: console.warn,
    info: console.log,
    verbose: console.log,
  },
  csvConfig: {
    delimiter: ',',
    batchSize: 100,
    strictMode: true,
  },
});

// parser._processData(<CSV OBJECT>) // returns parsed order

parser.parse(
  fs.createReadStream('./players_1920.csv'),
  fs.createWriteStream('./sorted.json')
);
