#!/usr/bin/env node

const path = require('path');
const pkg = require('./package.json');
const {execAt} = require('./util');
const parse = require('git-url-parse');

const {workflows, ...conf} = require('rc')(pkg.name, {
  options: '--depth=1',
  workflows: []
});

const remote = process.argv[2];
const remoteInfo = parse(remote);
const {options, dir, after} = workflows.reduce((conf, {test, ...current}) => {
  if (!test || new RegExp(test).test(remote)) {
    return {...conf, ...current};
  }
  return conf;
}, conf);

if (dir) execAt()(`mkdir -p ${dir}`);

const exec = execAt(dir);
const cloneCmd = `git clone ${options} ${remote} ${remoteInfo.name}`

exec(cloneCmd);

const execAfter = execAt(path.join(dir, remoteInfo.name));

try {
  if (after) execAfter(Array.isArray(after) ? after.join(';') : after);
} catch(e) {}
