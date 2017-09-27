# Webpack-config using Yarn


## Do all steps in main folder of your project!

If you don't have Yarn installed go to ``` https://yarnpkg.com/en/docs/install ``` or type this on terminal:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
```
```
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
and then:
```
sudo apt-get update && sudo apt-get install yarn
```

After you get Yarn just type:
```
yarn add --dev webpack
```
To confing webpack create file and name it webpack.config.js

Basic configuration can look like this:
```
module.exports = {
  entry: './src/app.js',              --> entry file, webpack will start from that file
  output: {                           --> output file
    path: path.resolve('./dist'),     --> desire place to output file
    filename: 'main.js'               --> name of the output file
  }
};
```
To check if everything works you should have a file name "app.js" in "src" file and type ```"node_modules/.bin/webpack"```

## Few entry files

### You can use more than one entry file in your project. To do so you have to make entry point for everyone in webpack:
```
module.exports = {
  entry: {
    main: './src/main.js',
    about: './src/about.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  }
};
```
### You also have to change the output file and put placeholder, webpack automatically create files with right names.

## Congratulations! You just set up your webpack :)
