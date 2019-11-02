'use strict';

var Funnel = require('broccoli-funnel');
const { join } = require('path');

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  treeForPublic: function() {
    return new Funnel(join(this.root, 'public'));
  },

  config(env, config) {
    let existingFonts = config.googleFonts || [];

    return {
      googleFonts: [
        ...existingFonts,
        'Roboto:300'
      ]
    }
  },

  contentFor: function(type, config) {
    if (type === 'body-footer') {
      var emberBasicDropdown = this.addons.find(addon => addon.name === 'ember-power-select');
      return emberBasicDropdown.contentFor(type, config);
    } else {
      return '';
    }
  }
};
