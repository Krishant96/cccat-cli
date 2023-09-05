#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
.argument('<string>', 'String to log')
.action((message: string) => {
  console.log(`Hello ${message}`);
})
.description('Say Hello!');

program.parse(process.argv);
