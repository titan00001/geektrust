const fs = require('fs');
const readline = require('readline');

const Manager = require('./Config');

const filename = process.argv[2];

try {

const rd = readline.createInterface({
    input: fs.createReadStream(filename),
    console: false
});

rd.on('line', function(line) {

    parseCommand(line);
});

}
catch(err) {
    console.error(err);
}


const parseCommand = function(line) {

    if(line !== '') {
        
        const args = line.replace('\t', '').split(' ');

        const commandName = args[0];
        const cmdArgs = [...args.slice(1)];
        console.log(Manager.execute(commandName, cmdArgs));
    }
    
}
