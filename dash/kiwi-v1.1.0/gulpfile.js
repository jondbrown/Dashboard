"use strict";

const klawSync = require('klaw-sync')
const options = require("./config/gulp");
const fs = require('fs');

klawSync('./gulp-tasks').forEach(function (file) {
  require(file.path)(options);
});