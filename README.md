# SocketChat: a simple FLOSS messenger

SocketChat is simple yet powerful instant messaging software, built around the awesome socket.io platform. SocketChat falls under the FLOSS/FOSS category, it is fully open source and privacy-first.

This file gives an overview of the project, some instructions for deploying your own SocketChat instance and walk through the official SocketChat. If you are looking for guides to contributing, please head to [CONTRIBUTING.md](https://github.com/HipyCas/SocketChat/blob/master/CONTRIBUTING.md); for an overview of the features, please head to [FEATURES.md](https://github.com/HipyCas/SocketChat/blob/master/FEATURES.md); and for our clear water Privacy Policy, go to [PRIVACY.md](https://github.com/HipyCas/SocketChat/blob/master/PRIVACY.md).

Before continuing reading, we recommend to read our manifest in [MANIFEST.md](https://github.com/HipyCas/SocketChat/blob/master/MANIFEST.md) to understand the core values behind this project and how we have built this project.

**:warning: BEFORE USING THIS SOFTWARE, BE SURE THAT YOU FULLY UNDERSTAND THE RIGHTS AND RESTRICTION THE GNU GPL-3.0 LICENSE GIVES YOU**

## README index

This file has the following sections and parts:

- [Components of SocketChat](#components-of-socketchat): Explains what code lives in this repo
- [Software used](#software-used): A comprehensive list of the software/libraries used in this project
- [Self deploying](#self-deploying): Instructions for deploying your own instance of SocketChat (only for developers)
  - [TL;DR](#tldr)
  - [Before starting](#before-starting)
  - [Git installation](#git-installation)
  - [Setting up the environment](#setting-up-the-environment)
  - [Build and serve](#build-and-serve)
  - [Update](#update)
  - [How to customize](#how-to-customize)
  - [Deploying server only](#deploying-server-only)
- [Using SocketChat](#using-socketchat)

## Components of SocketChat

SocketChat is made up of two principal components, a NodeJS server and a Vue webapp. Each of them has separate dependencies, but merged together as they live in the same repository. Below are described which files correspond to which component in a list format, in which bold style means require and cursive means optional.

The following files are related to the SocketChat server:
  
- **index.js**: The NodeJS file, which holds an express server
- **test/server.js**: This file contains mocha and supertest test for the NodeJS server.
- _dist/*_: This is the folder where the built Vue webapp lives, and the server serves this file. :warning: If you want to deploy the server without the webapp, go to th [*Self deploying* section](#self-deploying).

The following files are related to the SocketChat webapp:

- __src/*__: This contains the whole Vue webapp source
- **index.html**: This HTML file is the entry-point of the application
- **vite.config.js** and **tailwind.config.js** (and **postcss.config.js**): These three files are configuration files for Vite and TailwindCSS (PostCSS is a TailwindCSS dependency), respectively. If you want to easily customize a self-deployed SocketChat, you should first modify thiese files.
- __dist/*__: This folder holds the built Vue application

## Software used

Each component of the SocketChat application has different dependencies and so uses different software for different purposes. For the licenses of each of the library used, you may take a look at [NOTICE.md](https://github.com/HipyCas/SocketChat/blob/master/NOTICE.md) (remember that the license of this project can be found on [LICENSE](https://github.com/HipyCas/SocketChat/blob/master/LICENSE))

The only library which is common to both components is socket.io. The server works as a socket.io server/host, and the Vue webapp works as a socket.io client comunicating with the server. Socket.io is licensed under a MIT license.

For the server component, these are the libraries in use:

- expressJS [MIT]
- Cors for espressJS [MIT]
- Mocha (for testing) [MIT]
- Supertest (for testing) [MIT]

For the web application component, these are the libraries in use:

- VueJS [MIT]
- Vite [MIT]
- PostCSS (& Autoprefixer) [MIT]
- TailwindCSS [MIT]
- random-username-generator [MIT]

For more information about other parts of SocketChat that are not libraries, but that have been used, as well as for more information and links to each of the licenses of the libraries used, see the NOTICE.md file.

## Self deploying

This section briefly explains how to deploy your own instance of SocketChat. This is intended only for **developers and requires minimum knowledge of JavaScript and CLIs**, if you are only interested in using the official instance of SocketChat, please jump to [Using SocketChat](#using-socketchat). If you are interested in deploying only the server, be sure to read the last part of this section ([Deploying server only](#deploying-server-only)).

### TL;DR

```bash
git clone -b stable --single-branch https://github.com/HipyCas/SocketChat
cd SocketChat/
npm i --dev
npm run serve
```

:memo: *You may be interested in running `npm run start` instead of `npm i --dev` and `npm run serve`, as it wraps both together (used in Heroku deployments)*

### Before starting

Be sure that you have the appropriated **NodeJS** environment set up in your machine. The version that the latest version of the SocketChat server was developed with is **v12.19.0**. To check for your system's node version, run the following command

```bash
$ node --version
v12.19.0 # Or the version you have installed
```

Be sure to also have a valid **NPM** or yarn installation, keep in mind that the project was created with NPM and has not been tested with yarn yet. You can check if you have either NPM or yarn installed running one of the following commands:

```bash
$ npm --version
# or
$ yarn --version
```

Both NodeJS and NPM can be installed through apt in most Linux operating systems, but it is recommended to install it through the official NodeJS webpage. In windows, you can only install it downloading the binary from the webpage. NPM should be packed with all NodeJS releases.

It is recommended to install **git** to be able to download the full GitHub repository and to easily keep it up to date. You still can download the codebase manually, but it is not recommended. If you want to, head to the GitHub repository, make sure that you are in the `stable` branch looking at the top left of the page (change to it if you are not in it yet, or change to whatever branch you want to download, look below for more information), and download the code as ZIP file in the top left green button. If you manually download the ZIP file, unzip it in a directory of your choice and skip the next section.

### Git installation

Downloading the SoketChat codebase through git is the **recommended** way to go. Using git, you can easily keep the codebase up to date, collaborate to the project and create a copy of it, all from the command line. There are also GUI programs for git, for example GitHub Desktop, which is specially designed to work with GitHub. The SocketChat repository is hosted in GitHub, and you can access it in github.com/HipyCas/SocketChat. GitHub has some features which help collaboration on the project, but that will be more deeply discussed in [Contributing](#contributing).

The recommended way of cloning the repo, if you are planning on using the clone for a deployment, is cloning the `stable` branch. The `stable` branch contains the safe to run code, which has been tested by users in the `beta` branch and has not raised any bugs or problems. You can learn more about the different branches and versions, see [CONTRIBUTING.md](https://github.com/HipyCas/SocketChat/blob/master/CONTRIBUTING.md). To clone only the `stable` branch, run the following command in the folder where you want the SocketChat folder to be created:

```bash
git clone -b stable --single-branch https://github.com/HipyCas/SocketChat
```

If you want to get the latest features, we recommend you to install the `beta` branch, where the latest features are tested out by the users before going into the `stable` branch. To install the `beta` branch run the following command:

```bash
git clone -b beta --single-branch https://github.com/HipyCas/SocketChat
```

**:warning: THE FOLLOWING IS NOT RECOMMENDED IN ANY CASE :warning:**
Even though it is not recommended, you may want to download the `master` branch. This branch contains *nearly uncontrolled* code, this means it contains all new code to the repo and it is highly unstable. To clone the master branch, you can directly clone the repo, but you can also only clone that branch like showed below:

```bash
git clone -b master --single-branch https://github.com/HipyCas/SocketChat
```

:memo: *All this command example use the --single-branch and --branch options in order to only clone the specified branch. You can omit this and download the full repository, but make sure that you are in the right branch when diving in the next step*

### Setting up the environment

After the successfull installation, change your working directory and install the needed dependencies for running the project. To do this, run the following commands:

```bash
cd SocketChat/
npm i --dev
```

This is the moment to make any changes to the code and customize it, before you go into the building section.

### Build and serve

The codebase is now ready to be built and deployed. There is a NPM script in place for unifying this operation, building and running just after that, if for any reason, you want to run them separatedly, run `vite build` and `node index.js`. The following is the command that you should run, which corresponds to the `serve` NPM script:

```bash
npm run serve
```

### Update

To update your local repository to the latest version, you can simply run the following command:

```bash
git fetch origin/<branch_used> && git pull origin/<branch_used>
```

### How to customize

The easiest way to customize SocketChat and give it a unique look is changing th TailwindCSS configuration. To see everything you can change, you can head to [TailwindCSS official documentation](https://tailwindcss.com/docs/configuration). To customize the CSS styles, simply modify the `tailwind.config.js` file, as explained in the official documentation.

For more expert users, if you have some Vue experience, you may customize each component individually in the _src/_ directory. Keep in mind that this can break the application, so proceed with caution.

### Deploying server only

If you want to only deploy the SocketChat server,remove the following lines from the index.js file:

```js
/* ... */
// Serve static files
app.use('/', express.static(path.join(__dirname, 'dist/')));

//* ROUTES
// Serve index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

/* ... */
```

This lines are put in place to serve the Vue app and the static content. So if you are not planning to serve the webapp, you don't need those lines. You may also want to delete the _src/_ and _public/_ directories and any other files related to the Vue frontend (like *tailwind.config.js* or *vite.config.js*). You can also uninstall all dependencies not related to the server (most `devDependencies` and some `dependencies`).

## Using SocketChat
