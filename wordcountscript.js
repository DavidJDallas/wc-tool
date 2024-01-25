#!/usr/bin/env bun

const fs = require('fs');
const readline = require('readline');

const countBytes = (filePath) => {
    try {
        const content = fs.readFileSync(filePath);
        return content.length;
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return 0;
    }
};

const countLines = (filePath) => {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const splitText = content.split(/\r?\n/);
        const lastLineIsEmpty = splitText[splitText.length - 1] === '';
        if(lastLineIsEmpty){
            console.log(splitText.length -1);
        } else{
            console.log(splitText.length);
        }

    } catch (error) {
        console.error(`Error reading file: ${error}`);
        return 0;
    }
};

const countWords = (filePath) => {
    try{
        const content = fs.readFileSync(filePath, 'utf-8');
        const splitText = content.split(/\s+|\r?\n|\r|\t/);
        const removeEmptyStrings = splitText.filter((word) => word.length > 0);
        return removeEmptyStrings.length

    } catch(error){
        console.error(`Error reading file: ${error.message}`)
        return 0
    }
}

const returnValue = () => {
    const cliContent = process.argv.slice(2);

    const mapper = {
    '-c': countBytes(cliContent[1]),
    '-l': countLines(cliContent[1]),
    '-w': countWords(cliContent[1])
}

    return mapper[cliContent[1]]
}

returnValue();

