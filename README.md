# NPM Instal Example

## Install

1. To install npm packages from [BeclsFlow](https://github.com/orgs/BeclsFlow/packages?ecosystem=npm),replacing TOKEN with your PAT in the _.npmrc_ file:

   ```
   //npm.pkg.github.com/:_authToken=TOKEN         # authenticate to GitHub Packages
   @BeclsFlow:registry=https://npm.pkg.github.com # set the npm registry
   ```

2. Install the package

   ```
   npm install
   ```

More info:

[Installing a package](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package)

## Test

1. Replacing TOKEN with your PAT in the _index.js_:

   ```javascript
   import { DataCollector } from "@BeclsFlow/panda-data-collector";

   const pat = "TOKEN";
   ...
   ```

2. In the root folder:
   ```shell
   npm start
   ```
