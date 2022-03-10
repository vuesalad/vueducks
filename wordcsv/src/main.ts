"use strict";
import csv from 'csv-parser';
import * as fs from 'fs';

//import { processOneLine } from './lib/line.js'

let result:any = [];

fs.createReadStream('data/data.csv')
  .pipe(csv( { 'headers': false}))
  .on('data', (row) => {
    console.log(row);
  //  processOneLine(row, result)
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log(result)
  });

  