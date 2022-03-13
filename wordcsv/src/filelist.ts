'use strict'

import fs from 'fs';
import { convertOneCSV } from './main';

const path_source = 'data/orig';
const path_dest = 'data/output';


function fileProcessor(dirname: string, filename: string) {

    let full_name = dirname + '/' + filename;
    fs.stat(full_name, (err, stats) => {
        if (err) {
            console.log("satefile: " , err, stats);
            return;
        } else if (stats.isFile()) {
            // get path and filename without suffix
            let filename_no_suffix = filename.substring(0, filename.length - 4);
            let output_file = filename_no_suffix + '-ext.csv'
            console.log("good file", filename, filename_no_suffix, output_file);
            convertOneCSV(path_source, path_dest, filename_no_suffix);

        } else {
            console.log(filename, "is not file");
        }

    });
}

function readFiles(dirname: string, onError: (err: NodeJS.ErrnoException) => void ) {
    fs.readdir(dirname,
        function (err, filenames) {
            if (err) {
                onError(err);
                return;
            }
            console.log (filenames);
            filenames.forEach(function (filename) {
                //TBD 
                //if (filename.indexOf("3-1")) {
                   fileProcessor(dirname,filename);
                //}
            });
        }
    );
}

readFiles(path_source, (err)=> {
    console.log("readFiles:",err)
});