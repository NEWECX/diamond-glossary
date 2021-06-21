'use strict';

const key_values = require('./0-key-values');
const certificates = require('./1-certificates');
const fancy_colors = require('./2-fancy-colors');
const values_maps = require('./3-values-maps');

module.exports = {

    ...key_values,
    ...certificates,
    ...fancy_colors,
    values_maps,

};