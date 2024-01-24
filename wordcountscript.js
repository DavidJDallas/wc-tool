const fs = require('fs');
const readline = require('readline');

const countBytes = (filePath) =>{
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.length;
}

const cliContent = process.argv.slice(2)



if(cliContent[0] === '-c'){
    console.log(countBytes(cliContent[1]))
}