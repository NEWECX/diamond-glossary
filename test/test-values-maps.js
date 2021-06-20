'use strict';

const chai = require('chai');
const values_maps = require('../src/3-values-maps')

const expect = chai.expect;

// to run all tests start with test-
// npm test
// OR
// stage_env=test mocha --reporter spec test/test-values-maps

describe('Test values-maps', () => {

    it('test values-maps', async () => {
        for (const key in values_maps) {
            //console.log(key);
            const {values, map, reverse_map} = values_maps[key];
            expect(values.length === Object.keys(map).length).equals(true);
            const reverse_map_values = Array.from(new Set(Object.values(reverse_map)));
            expect(values.length === reverse_map_values.length).equals(true);
            for (const value of values) {
                if (typeof value === 'string') {
                    expect(value).equals(value.toUpperCase());
                }
                expect(map).has.property(value);
                expect(map[value]).to.be.a('string');
            }
            for (const r_key in reverse_map) {
                expect(r_key).equals(r_key.toLowerCase());
                const r_value = reverse_map[r_key];
                expect(values.indexOf(r_value)).not.equals(-1);
            }
        }
    });

});