'use strict';

const key_values = require('./cfg/0-key-values');
const certificates = require('./cfg/1-certificates');
const values_maps = require('./cfg/3-values-maps');

module.exports = {

    ...key_values,
    ...certificates,
    ...assets_config,
    ...values_maps,
    ...std_fields,

};