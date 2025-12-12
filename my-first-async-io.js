const fs = require('fs');
//get a file path from command line
const file = process.argv[2];
//read the file contents asynchronously
fs.readFile(file, (err, data) => {
    if (err) {
        throw err; // handles errors
    }
    //convert buffer to string
    const text = data.toString();
    //split the text by new lines and count them
    const newLinesCount = text.split('\n').length - 1;
    //print the number of new lines
    console.log(newLinesCount);
});

// Cites:
// fs.readFile - https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback 
