const {execSync} = require('child_process');

exports.execAt = function execAt(cwd) {
  return command => {
    console.log(command);
    execSync(command, {stdio: 'inherit', cwd});
  };
}
