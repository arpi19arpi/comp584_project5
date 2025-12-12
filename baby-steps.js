let sum = 0;

// loop through command line arguments starting from index 2 becausse
// the first two elements are 'node' and the script name
for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]); // convert each argument to a number and add it to sum
}

//print the sum
console.log(sum);

// process.argv — https://nodejs.org/api/process.html#processargv