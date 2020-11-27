const {exec} = require('child_process');
//var command='sh postinstall.sh';
var command='';


const executedCommands = exec(command, (error, stdout) => {
    console.log(stdout);
    if (error) {
        throw error;
    }
});
