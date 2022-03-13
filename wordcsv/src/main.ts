"use strict";
import csv from 'csv-parser';
import * as fs from 'fs';
import iconv from 'iconv-lite'

import { stringify } from 'csv-stringify/sync';

import { processOneLine } from './lib/line'

import { Row } from './lib/common'




function convertOneCSV(dirname_src: string, dirname_dst: string, filename_no_suffix: string) {
  let result: Array<Row> = [];

  let orig_file = dirname_src + '/' + filename_no_suffix + '.csv';
  let dest_file = dirname_dst + '/' + filename_no_suffix + '-ext.csv';

  fs.createReadStream(orig_file)
    .pipe(iconv.decodeStream('gbk'))
    .pipe(csv({ 'headers': false }))
    .on('data', (row: Row) => {
      //  console.log(row);   result.push(row);
      processOneLine(row, result)
    })
    .on('end', () => {
      console.log('CSV file successfully processed');
      console.log(result)
      const output = stringify(result, {
        header: false
      })

      console.log("output", output);
      fs.writeFile(dest_file, output, () => { });

    });

}

export { convertOneCSV }