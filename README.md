[![The MIT License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=flat-square)](https://github.com/Gelantine-Ritter/aktuelle-webtechnologien-project/blob/master/LICENSE.md)
[![pipeline status](https://gitlab.beuth-hochschule.de/s80116/wp-gruppe1/badges/master/pipeline.svg)](https://gitlab.beuth-hochschule.de/s80116/wp-gruppe1/-/commits/master)

# MagicBySvelte

`Magic by Svelte` is an application to organize Magic cards in a deck. Any number of decks can be created and managed. This way you can optimize your decks and search specifically for Magic cards.

## Table of Contents

- [MagicBySvelte](#magicbysvelte)
  - [Table of Contents](#table-of-contents)
  - [Releases](#releases)
  - [Build With](#build-with)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
      - [Node.js](#nodejs)
    - [Installing](#installing)
    - [Configuration](#configuration)
  - [Build](#build)
    - [Usage with Docker](#usage-with-docker)
  - [Running the tests](#running-the-tests)
  - [Monitoring](#monitoring)
    - [Datadog](#datadog)
    - [Google Analytics](#google-analytics)
    - [Logging with Datadog](#logging-with-datadog)
  - [Codebase](#codebase)
  - [Authors](#authors)
  - [License](#license)

## Releases

[v1.0.0](https://gitlab.beuth-hochschule.de/s80116/wp-gruppe1/-/tags/v1.0.0)

## Build With

- [Svelte](https://svelte.dev "Svelte's Homepage")
- [npm](https://www.npmjs.com "npm's Homepage")

## Getting Started

### Prerequisites

#### Node.js

- ##### Installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.

- ##### Installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

```bash
sudo apt install nodejs
```

```bash
sudo apt install npm
```

- ##### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```bash
node -v
```

v10.19.0

```bash
npm -v
```

6.14.9

### Installing

Use git clone to get a copy of the projects repository.

```bash
git clone git@gitlab.beuth-hochschule.de:s80116/wp-gruppe1.git

```

Use the package manager npm to install MagicBySvelte.

```bash
npm install
```

### Configuration

Create a .env file in the root directory and transfer the following variables:

| Variable            | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CRUD_CRUD_URL_LOCAL | The application needs a crud-crud-backend-url. A unique API endpoint can be retrieved [here](https://crudcrud.com "CrudCrud's Homepage") or pass it directly as process.env-varibale from CLI when bundling the project.When you push a new commit to GitLab please update the GitLab-CI-variable ( settings -> CI/CD -> variables ) once per day.This is requiered for Gitlab-CI. |
| DATADOG_CLIENTTOKEN | Add the Datadog-Clienttoken from [Gitlab](https://gitlab.beuth-hochschule.de/s80116/wp-gruppe1/-/settings/ci_cd) to log Data.                                                                                                                                                                                                                                                      |
| APPLICATION_ID      | Add the Datadog API-key from [Gitlab](https://gitlab.beuth-hochschule.de/s80116/wp-gruppe1/-/settings/ci_cd) to track Data.                                                                                                                                                                                                                                                        |
| TEST_ENV |  Set as "local"        | 

## Build

To get a development server run:

```bash
npm run dev
```

### Usage with Docker

get the latest release from DockerHub

```bash
docker pull mattihenning/magic-by-svelte:tagname
```

Build the Docker image.

```bash
docker build -t <image-name> .
```

Run the Docker container locally:

```bash
docker run -p 5000:5000 <image-name>
```

## Running the tests

TestCafe is used as the test automation tool. After your Build is ready you can run the End-To-End-Test-Suit with

```bash
npx testcafe chrome tests/e2e-tests/
```

Or for headless:

```bash
npm run testHeadless
```

## Monitoring

### Datadog

Datadog’s Real User Monitoring (RUM) gives end-to-end visibility into the real-time activity and experience of users. RUM runs in the background of the application. Admin rights are required to access the monitoring tools.

### Google Analytics

Google Analytics extract and track a wide range of informational data acquired from web traffic, including place and time of access, duration of the visit and more.
The token is included in the HTML and is not stored in the .env file.

**Note:** If you use an adblocker, deactivate it in the browser to collect data for Google Analytics.

### Logging with Datadog

To send logs from the web browser to Datadog the logger can be imported and implemented in the try-catch block.

```javascript
import logger from './../monitoring/datadog-logger'

    try {
      const response = await fetch(`${crudcrudUrl}/decks`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name: titel,
        }),
      })
      logger.info('New deck created', { body: titel })
    } catch (e) {
      logger.error('Request failed: create deck', e)
    }
  getDecks()
}
```

## Codebase
[Codebase](https://gitlab.beuth-hochschule.de/s80116/wp-gruppe1/-/tree/master)

## Authors

- Ava Brandt
- Anna Reißmann
- Matti Henning
- Duc Tran

## License

Distributed under the MIT License. See [`LICENSE.md`](https://github.com/Gelantine-Ritter/aktuelle-webtechnologien-project/blob/master/LICENSE.md) for more information.
