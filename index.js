/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-cli-pivot-table',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/pivottable/dist/pivot.js');
    this.app.import(app.bowerDirectory + '/pivottable/dist/pivot.css');
    this.app.import(app.bowerDirectory + '/jqueryui/jquery-ui.min.js');
  }    
};
