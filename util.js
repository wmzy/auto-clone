const {execSync} = require('child_process');
  const untildify = require('untildify');

exports.execAt = function execAt(cwd) {
  if (cwd) cwd = untildify(cwd);

  return command => {
    console.log(command);
    execSync(command, {stdio: 'inherit', cwd});
  };
}
