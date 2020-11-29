const {exec} = require('child_process');
var command='sh postinstall.sh';



const executedCommands = exec(command, (error, stdout) => {
    console.log(stdout);
    if (error) {
        throw error;
    }
});
