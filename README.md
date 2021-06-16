# A Convenient Collection of Diamond Glossary 

Collects: certificate_lab, shape, color, clarity, cut, polish, fluorescence, symmetry, lab_grown, fancy_color and fancy_color_intensity

values_maps aggregate:

    1) values - allowed value keys, 
    2) map - key to name mapping
    3) reverse map - name to key mapping.

# How to use?

## install

npm install @ritani/diamond-glossary

## in code

<code>

    const {values_maps, certificate_full_names} = require('@ritani/diamond-glossary);

    console.log(values_maps);

    console.log(certificate_full_names);

</code>