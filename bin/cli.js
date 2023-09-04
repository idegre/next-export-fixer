#!/usr/bin/env node

let { fixer } = require("./fixer");

const args = process.argv;

fixer(args[2]);
