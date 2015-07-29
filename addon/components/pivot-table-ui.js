import Ember from 'ember';
import layout from '../templates/components/pivot-table-ui';

export default Ember.Component.extend({
  layout: layout

  setupPivottable: function() {

      var pikaday = new Pikaday({
      field: this.$()[0],
      onSelect: function() { that.userSelectedDate(); },
      firstDay: 1,
      format: this.get('format') || 'DD.MM.YYYY'
    });

    this.set('pikaday', pikaday);
    this.get('pikaday').setDate(this.get('value'), true);

    pivotUI()
  }.on('didInsertElement'),

  buildOptions: function() {
    return {
      input: {},
      options: {},
    };
  }

});
