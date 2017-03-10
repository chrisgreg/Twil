# Twil 📝

Super Simple Node CLI Twitter Client for OSX & Linux

## Installation

`npm install -g twil`
- Create an [application on Twitter.com](https://apps.twitter.com/) - completely free ~1 minute setup
- Create a `.twilcredentials.json` file in your home directory with the following credentials and fill them in from your newly created applications details:

```
{
  "consumer_key": "",
  "consumer_secret": "",
  "access_token_key": "",
  "access_token_secret": ""
}

```

## Usage

Currently supports one command - tweet!

`twil t [content]`

Where content is a string containing the content of your tweet.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

v1.0.0 - Initial Commit

## Credits

[Chris Gregori](http://www.chrisgregori.co.uk)

## License

ISC
