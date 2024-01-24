#!/usr/bin/env bun

const fs = require('fs');
const readline = require('readline');

const countBytes = (filePath) => {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return content.length;
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return 0;
    }
};

const cliContent = process.argv.slice(2);


if(cliContent[0] === '-c'){
    console.log(countBytes(cliContent[1]))
}