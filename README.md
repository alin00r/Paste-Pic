# Paste-Picture

[![License](https://img.shields.io/github/license/JoeBiellik/picturepaste.svg)](LICENSE.md)
[![Release Version](https://img.shields.io/github/release/JoeBiellik/picturepaste.svg)](https://github.com/JoeBiellik/picturepaste/releases)

> Simple [Node.js](https://nodejs.org/) image pastebin built with [express](https://expressjs.com/), [MongoDB](https://www.mongodb.org/), [hbs](https://www.geeksforgeeks.org/handlebars-templating-in-expressjs/) and [Multer](#).

Try it out at [paste-pic-pro.onrender.com/](https://paste-pic-pro.onrender.com/)

## Features

- Clean code thanks to ES6 async/await and [Express](https://expressjs.com/)
- Short URLs via [shortid](https://github.com/dylang/shortid), e.g. `09ofATmOD`
- Full support for All Images with [sharp](https://www.npmjs.com/package/sharp) etc
- Automatic and configurable paste expiry
- Simple and responsive UI built with [hbs & Css](https://www.geeksforgeeks.org/handlebars-templating-in-expressjs/)

## Development

1. Clone this repo:

```shell
git clone https://github.com/alin00r/Paste-Pic && cd Paste-Pic
```

2. Install dependencies:

```shell
npm install
```

3. **Configure Environment Variables:**

   1. **Create a `.env` File:**
      In the root directory of the app, create a file named `.env`.

   2. **Add the Following Environment Variables:**
      Replace the placeholders with your actual information. You might need to sign up for accounts and services to obtain the required credentials.

   ```dotenv

   # MongoDB Configuration
   MONGO_URI=your-mongodb-database-url

   ```

4. Start app and Try it:

```shell
npm run dev
```
