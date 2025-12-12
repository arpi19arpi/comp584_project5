const fs = require('fs');

module.exports = function(dirPath, ext, callback) {
    const extension = '.' + ext;

    fs.readdir(dirPath, (err, files) => {
        if (err) {
            //checking for errors
            return callback(err);
        }
        //filtering files by extension
        const filtered = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i].endsWith(extension)) {
                filtered.push(files[i]);
            }
        }
        //returning the filtered list via callback
        callback(null, filtered);
    });
};  

//cites:
//fs.readdir(path, callback) - https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback 
