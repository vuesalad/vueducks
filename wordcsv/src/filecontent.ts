'use strict'

import fs from 'fs'
import csv from 'csv-parser'
import iconv from 'iconv-lite'


import { Row, hasMoreThanAscii } from "./lib/common"


function processOneLine(line: Row) {

    let word = line['0'].trim();
    let explain = line['2']

    console.log('word', word);
    console.log('explain', explain);
    for (let i = 0; i < explain.length; i++) {
        let char = explain.charAt(i);
        let code = explain.charCodeAt(i);
        console.log(i, char, code.toString(16));
    }

    if (hasMoreThanAscii(word)) {
        console.log("word morn than asic", word);
        return;
    }



}


function convertOneCSV(dirname_src: string, filename_no_suffix: string) {

    let orig_file = dirname_src + '/' + filename_no_suffix + '.csv';


    fs.createReadStream(orig_file)
        .pipe(iconv.decodeStream('gbk'))
        .pipe(
            csv({
                headers: false
            }))
        .on('data', (row: Row) => {
            //  console.log(row);   result.push(row);
            processOneLine(row)
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });

}

let dirname_src = 'data/orig'
let filename_no_suffix = 'ssat-high-frequency-week3-1'

convertOneCSV(dirname_src, filename_no_suffix)