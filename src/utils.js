import fs from 'fs';
import path from 'path';
import { default as API }from 'twitter';
import { Spinner } from 'cli-spinner';
import chalk from 'chalk';

export const readCredentials = (credentialFile) => {
  const filePath = path.join(process.env.HOME, credentialFile);
  const fileContent = fs.readFileSync(filePath);
  return JSON.parse(fileContent);
}

export const createTwitterClient = (credentials) => {
  return new API(credentials);
}

const escapeQuotes = (str) => { return str.replace(/[\""]/g, '\\"') }
const log = (msg) => console.log(chalk.green(msg));
const info = (msg) => console.log(chalk.blue(msg));
const error = (msg) => console.log(chalk.red(msg));

export const tweet = (twitter, message) => {
  const progress = new Spinner(chalk.blue('%s Tweeting..'));
  progress.setSpinnerString('|/-\\');
  progress.start();

  const sanitisedMessage = escapeQuotes(message);
  const params = { status: sanitisedMessage };

  twitter.post('statuses/update', params)
    .then(tweet => {
      progress.stop(true);
      info(`-> ${sanitisedMessage}`)
      log('\nTweet successful');
    })
    .catch(err => {
      progress.stop(true);
      error(err[0].message);
      throw err;
    })
}
