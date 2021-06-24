# Email spammer

## Installation

Email spammer requires [Node.js](https://nodejs.org/)

Download git repository by:

```sh
git clone https://github.com/yarikpo/email-spammer.git
```

Install dependecies:

```sh
cd email-spammer
npm install
```

Constant variables:
| Variable | Example |
| ------ | ------ |
| EMAIL_SENDERS | "email1@gmail.com;email2@gmail.com;email3@gmail.com" |
| EMAIL_SENDER_PASSWORDS | "pass123;qwerty1212;qweasdzxc098" |
| VICTIM_EMAIL | "victim@gmail.com" |
| EXECUTION_TIME (in ms) | 30000 |
| EMAIL_SUBJECT | "This is Subject!" |
| EMAIL_TEXT | "Plain text" |
| DEBUG | true |

## Executing

```sh
node app.js
```

## License

MIT

**Free Software!**