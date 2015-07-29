/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-pivot-table',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  }
};
