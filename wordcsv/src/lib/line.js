

/**
 * @param  a line to be process, 
 * @param  result: the array of lines generated, each line stands for a word and definition
 * @return 
 */
function processOneLine(line, result){

  let new_line = [];
  new_line.push(line['0']);
  result.push(new_line);

  console.log(line)
  console.log(result)

}

export  { processOneLine };

function addTwo(num) {
    return num + 2;
  }

function addThree(num) {
    return num + 3;
  }
  
export { addTwo , addThree};

