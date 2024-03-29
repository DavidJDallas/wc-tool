#!/usr/bin/env bun

const fs = require('fs');

const countBytes = (filePath) => {
    try {
        const content = fs.readFileSync(filePath);
        console.log(content.length);
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
        console.log(removeEmptyStrings.length)

    } catch(error){
        console.error(`Error reading file: ${error.message}`)
        return 0
    }
}

const countCharacters = (filePath) => {
    try{
        const content = fs.readFileSync(filePath, 'utf-8');
        const splitText = content.split("");
        console.log(splitText.length);
    } catch(error){

    }
}

const returnValue = () => {
    const cliContent = process.argv.slice(2);

    const mapper = {
    '-c': countBytes(cliContent[1]),
    '-l': countLines(cliContent[1]),
    '-w': countWords(cliContent[1]),
    '-m': countCharacters(cliContent[1])
}

    return mapper[cliContent[1]]
}

returnValue();

