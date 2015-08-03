import Ember from 'ember';
import layout from '../templates/components/pivot-table-ui';



export default Ember.Component.extend({
  _pivot: null,
  _data: null,

  didInsertElement() {
    let input = JSON.parse(this.get('params').get('input'));

var OptionsConfig = Ember.Object.extend({

  options: {
      onRefresh: function(config) {
          var config_copy = JSON.parse(JSON.stringify(config));
          //delete some values which are functions
          delete config_copy["aggregators"];
          delete config_copy["renderers"];
          delete config_copy["derivedAttributes"];
          //delete some bulky default values
          delete config_copy["rendererOptions"];
          delete config_copy["localeStrings"];
          var data = JSON.stringify(config_copy, undefined, 2);
          //Ember.Logger.debug("config is",data);
          //component.get('_data').set(data);
          this.get('component').sendAction('change',data);// get('_data').set(data);
      }
   }
});
var optionsConfigInstance = OptionsConfig.create({component: this});

    //this.get('params').get('options')
    let pivot = this._editor = this.$().pivotUI(input, optionsConfigInstance.options);
    //Ember.Logger.debug("pivot component is",pivot);
  },

  actions: {
    change: function() {
      this.sendAction('change', _data);
    }
  },


  
/*
  options: function () {
    return {
      hiddenAttributes : ["id"],
      /*onRefresh: function(config) {
          var config_copy = JSON.parse(JSON.stringify(config));
          //delete some values which are functions
          delete config_copy["aggregators"];
          delete config_copy["renderers"];
          delete config_copy["derivedAttributes"];
          //delete some bulky default values
          delete config_copy["rendererOptions"];
          delete config_copy["localeStrings"];
          var data = JSON.stringify(config_copy, undefined, 2);
          Ember.Logger.debug("config is",data);
      }*/
    //}
  //}

});
