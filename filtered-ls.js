const fs = require('fs');
//get directory path and file extenrion
const dirPath = process.argv[2];
const fileExt = process.argv[3];

//read directory
fs.readdir(dirPath, (err, files) => {
    if (err) {
        throw err;
    }
    //loop through files in direcory
    for(let i = 0; i < files.length; i++) {
        //check file extension
        if (files[i].endsWith(`.${fileExt}`)) {
            console.log(files[i]);
        }
    }
}); 

//Cites:
// fs.reddir() - https://nodejs.org/api/fs.html#fs_fs_readdirdirpath_options_callback   
// process.argv - https://nodejs.org/api/process.html#process_process_argv 