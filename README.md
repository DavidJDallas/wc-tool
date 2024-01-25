# wc-tool
This is a coding challenge from John Crickett's coding challenges blog. It's a script that functions the same as the wc tool in any Unix-based OS. Just started yesterday and currently works for counting bytes, counting line numbers, counting words, or counting characters. You can do this through denoting -c, -l, -w, or -m in the CLI, respectively. How to run in depth is explicated below. 

## Setting up

Run using either Node.js or Bun. To install Node.js, go [here](https://nodejs.org/en/download). To install Bun, visit [here](https://bun.sh/docs/installation).

## Using the Script without adding to PATH

Locate yourself in the correct folder that you have stored the script and run either:

node wordcountscript.js [desired command] test.txt
bun wordcountscript.js [desired command] test.txt

Replace your desired command with either -c (count bytes) -l (count length of text), -w(count words), or -m(count characters). 

Obviously this does not really have much practical value, since it can only read files in the same folder as the script. To be able to use through your cli as a more useful script see below.

## Using the Script Globally

Run the following in your CLI:

``chmod +x wordcountscript.js``

To enable using it without the .js, you can use the following CLI command: 

``sudo ln -s $(pwd)/ccwc.js /usr/local/bin/ccwc``

Then you can navigate to your desired file where you would like the tool to operate on, and run 

``wordcountscript [desired command] [filename]``

If you haven't enabled the script to be run without .js, i.e. you haven't followed the second step of this section, simply remove add '.js' to the end of wordcountscript:

``wordcountscript.js [desired command] [filename]``

Replace the desired command with either -c (count bytes) -l (count length of text), -w(count words), or -m(count characters). 




