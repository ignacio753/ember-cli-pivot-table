module.exports = {
  description: ''

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
    return this.addBowerPackageToProject('pivottable');
  },

  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/remarkable/dist/remarkable.js');
  }
};
