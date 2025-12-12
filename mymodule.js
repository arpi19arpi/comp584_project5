const makeItModular = require('./make-it-modular.js');

//getting command line arguments
const dirPath = process.argv[2];
const ext = process.argv[3];

//calling the make-it-modular function
makeItModular(dirPath, ext, (err, list) => {
  if (err) {
    return console.error(err);
  }

  //printing each filtered file name
  for(let i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
});