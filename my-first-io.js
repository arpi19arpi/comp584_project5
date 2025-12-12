const fr = require('fs');
//get the file path from command line
const file = process.argv[2];
//read the file contents
const contents = fr.readFileSync(file);
//convert buffer to string
const text = contents.toString();
//split the text by new lines and count them
const newLinesCount = text.split('\n').length - 1;
//print the number of new lines
console.log(newLinesCount);

// Sites:
// fs.readFileSync - https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options 

