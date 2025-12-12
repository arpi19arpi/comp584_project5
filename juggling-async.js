const http = require('http');
const url = [process.argv[2], process.argv[3], process.argv[4]];
const result = ["", "", ""]; //stored the three urls in command line 
let count = 0;

function printResult(index) {
    http.get(url[index], (response) =>{
        response.setEncoding('utf8');
        let data = '';
        response.on('data', (chunk) => {
            data += chunk; //collect data chunks
        });

        //when response ends, store the result
        response.on('end', () => {
            result[index] = data;
            count++;
            //when all three are completed, print them
            if (count === 3) {
                console.log(result[0]);
                console.log(result[1]);
                console.log(result[2]);
            }
        });

        //if any stream errors occur
        response.on('error', (err) => {
            console.error(err);
        });
    });
}


//starting all http get requests
printResult(0);
printResult(1);
printResult(2);
