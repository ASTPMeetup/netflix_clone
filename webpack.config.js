const path = require('path');

module.exports = {
  "entry": {
    "index": "./src/index"
  },
  "output": {
    "path": path.join(__dirname, 'src/dist'),
    "filename": "[name].pack.js"
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "babel-preset-env",
              "babel-preset-react"
            ]
          }
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      }
    ]
  }
};