'use strict';

const chai = require('chai');
const {certificate_full_names, certificate_lab_map} = require('../src/1-certificates')
const values_maps = require('../src/2-values-maps')

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
        //console.log(values_maps.color);
    });

    it('test certificates', async () => {
        const keys1 = Object.keys(certificate_full_names);
        const keys2 = Object.keys(certificate_lab_map)
        expect(keys1).to.be.deep.equal(keys2);
    });
});