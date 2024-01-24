# wc-tool
This is a coding challenge from John Crickett's coding challenges blog. It's a script that functions the same as the wc tool in any Unix-based OS.It currently is 

## Setting up

Run using either Node.js or Bun. To install Node.js, go [here](https://nodejs.org/en/download). To install Bun, visit [here](https://bun.sh/docs/installation).

## Using the Script without adding to PATH

Locate yourself in the correct folder that you have stored the script and run either:

node wordcountscript.js -c test.txt
bun wordcountscript.js -c test.txt

Obviously this does not really have much practical value, since it can only read files in the same folder as the script. To be able to use through your cli as a more useful script see below.

## Using the Script Globally

Run the following in your CLI:

``chmod +x wordcountscript.js``

To enable using it without the .js, you can use the following CLI command: 

``sudo ln -s $(pwd)/ccwc.js /usr/local/bin/ccwc``






