'use strict';

const key_values = require('./0-key-values');
const certificates = require('./1-certificates');
const values_maps = require('./2-values-maps');

module.exports = {

    ...key_values,
    ...certificates,
    values_maps,

};