import Ember from 'ember';

var JsonInput = Ember.Object.extend({
  input: '',
  options: { hiddenAttributes : ["id"],
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
          this.sendAction('on-refresh', data);
      }*/
   }
});

var JsonInput = JsonInput.create({ input: '[{"id":1,"Tier":"Tier 1","Copay":"$10","Medical status":"Covered","Pharmacy status":"Tier 1 Covered","Plan Id":"1","Provider":"Aetna","Parent":"Alliath Health","Plan Type":"Commercial","Drug Class":"Inhibitors","Drug":"Copaxone","State":"Alabama","County":"","MSA":""},{"id":2,"Tier":"Tier 2","Copay":"$15","Medical status":"Preferred","Pharmacy status":"Tier 1 Covered","Plan Id":"2","Provider":"Aetna Open","Parent":"Aetna","Plan Type":"Commercial","Drug Class":"Analgesics","Drug":"Copaxone","MSA":"new york area"}]'});


export default Ember.Route.extend({
  
  model: function() {
    return JsonInput;
  },

  actions: {
    pivotChanged(data) {
      Ember.Logger.debug("Received changes from application route",data);
    }
  }

});