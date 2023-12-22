#!/usr/bin/env node

import { program } from 'commander';
import { readFile } from 'fs';

program.parse();

const fileName1 = program.args[0];
const fileName2 = program.args[1];

let fileContent: any;

// Todo: Fix all types
if (fileName1) {
	readFile(fileName1, 'utf8', (err: any, data: any) => {
		if (err) {
			console.log(err);
		}

		fileContent += data;
	});
}

if (fileName2) {
	readFile(fileName2, 'utf8', (err: any, data: any) => {
		if (err) {
			console.log(err);
		}

		fileContent += data

		console.log(fileContent);
	});
}

