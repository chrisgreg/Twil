#!/usr/bin/env node

import { default as program } from 'commander';
import { readCredentials, createTwitterClient, tweet } from './utils';

const CREDENTIAL_FILE = '.twilcredentials.json';
const credentials = readCredentials(CREDENTIAL_FILE);
const twitter = createTwitterClient(credentials);

program
  .command('t [status]')
  .description('Tweet your status')
  .action(cmd => {
    tweet(twitter, cmd);
  })

program.parse(process.argv);
