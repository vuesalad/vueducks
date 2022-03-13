'use strict';

// get the Console class
import { Console } from "console";
import fs from 'fs'

// make a new logger
const myLogger = new Console({
  stdout: fs.createWriteStream("log/line.normalStdout.txt"),
  stderr: fs.createWriteStream("log/line.errStdErr.txt"),
});

import { Row, hasMoreThanAscii } from './common'


const split_rep = /,|;|and|\uff1b/


function arrayToString(string_list: string[]) : string {
  let result: string = '';
  for (const value of string_list) {
    result += value + '; '
  }
  return result;
}

function generateWordDefs (string_list: string[]) : Row [] {
  let length = string_list.length;
  let result: Row[] = [];
  console.log("length", length)

  for (let i = 0; i <length; i++) {
    console.log("i", i)
    let word = string_list.shift();
    console.log ("word", word)
    if (word != null) {
      let line: Row = {};
      line['0'] = word;
      line['1'] = arrayToString(string_list);
      console.log("line 1", line['1'])
      string_list.push(word);
      result.push(line);
    }
  }
  return result;
}

/**
 * @param  a line to be process, 
 * @param  result: the array of lines generated, each line stands for a word and definition
 * @return 
 */
function processOneLine  (line : Row, result : Array<Row> ) : void {

  let word = line['0'].trim();
  let explain = line ['2']

  if (hasMoreThanAscii(word)) {
    console.log ("word morn than asic", word);
    return;
  }

  let synonyms : string[]= [];
  if (explain !== undefined) {
     synonyms =  explain.split(split_rep);
  }

  console.log ("synonyms:", synonyms)
  let synonyms_clean : Array<string> = []
  for ( let value of  synonyms) {
    console.log ("value:", value)
   
     let value_clean = value.trim();
     if (value_clean.includes(' ') || value_clean == '') {
       // it is a sentence or nothing
       // remove the new line
      value_clean = value_clean.replace(/\n/, ' ')

     } else{
       // value _clean remove (   )
      myLogger.log ('value clean', value_clean)
      let pron = value_clean.indexOf('\u{ff08}')
      if (pron >= 0) {
        value_clean = value_clean.substring(0,pron);
      }
      myLogger.log('pron', pron, 'value clean', value_clean)

      synonyms_clean.push(value_clean);
     }


     console.log ("clean",synonyms_clean)
  }
 
  let new_row = [ word, ...synonyms_clean] ;
  console.log ("new row", new_row)
  if (new_row.length < 2) {
    let simple_row = {
      '0': word,
      '1' : explain
    }
    console.log("simple row", simple_row)
    result.push(simple_row)

  } else {
    let new_rows = generateWordDefs(new_row);
    console.log ("new rows", new_rows)
    result.push(...new_rows);

  }
 
 
  return;


  

  for (const [key, value] of Object.entries(line)) {
    let new_line : Row = {};
    console.log ("key:", key);
    console.log ("value:", value);
    if (hasMoreThanAscii(value)) {
      //do nothing
    } else {

      new_line[key] = value;
      result.push(new_line);
    
      console.log(new_line)

    }
  }

//  console.log(result)

}

export  { processOneLine };

