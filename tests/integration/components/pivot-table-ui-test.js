import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('pivot-table-ui', 'Integration | Component | pivot table ui', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pivot-table-ui}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#pivot-table-ui}}
      template block text
    {{/pivot-table-ui}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
