'use strict';

const shape_map = {
	RD: 'Round',
	CU: 'Cushion',
	PR: 'Princess',
	EM: 'Emerald',
	OV: 'Oval',
	AS: 'Asscher',
	RA: 'Radiant',
	MQ: 'Marquise',
	PS: 'Pear',
	HS: 'Heart',
	TR: 'Triangle',
	SH: 'Shield',
	PE: 'Pentagonal',
	RO: 'Rose',
	OC: 'Octagonal',
	ST: 'Star',
	HE: 'Hexagonal',
	HM: 'Half Moon',
	TZ: 'Trapezoid'
};

const shape_values = Object.keys(shape_map);

const reverse_shape_map = Object.entries(shape_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

const color_map = {
	D: 'D',
	E: 'E',
	F: 'F',
	G: 'G',
	H: 'H',
	I: 'I',
	J: 'J',
	K: 'K',
	L: 'L',
	M: 'M',
	N: 'N',
	O: 'O',
	P: 'P',
	Q: 'Q',
	R: 'R',
	S: 'S',
	T: 'T',
	U: 'U',
	V: 'V',
	W: 'W',
	X: 'X',
	Y: 'Y',
	Z: 'Z'
};

const color_values = Object.keys(color_map);

const reverse_color_map = Object.entries(color_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

const clarity_map = {
	FL: 'Flawless', 
	IF: 'Internally Flawless',
	VVS1: 'Very, Very Slightly Inclusion 1',
	VVS2: 'Very, Very Slightly Inclusion 2',
	VS1: 'Very Slightly Inclusion 1', 
	VS2: 'Very Slightly Inclusion 2', 
	SI1: 'Slightly Inclusion 1', 
	SI2: 'Slightly Inclusion 2',
	I1: 'Inclusion 1', 
	I2: 'Inclusion 2',
	I3: 'Inclusion 3'
};

const clarity_values = Object.keys(clarity_map);

const reverse_clarity_map = Object.entries(clarity_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

const culet_size_map = {
	N: 'None',
	VS: 'Very Small', 
	S: 	'Small',
	M: 'Medium',
	SL: 'Slightly Large',
	LG: 'Large',
	VG: 'Very Large'
};

const culet_size_values = Object.keys(culet_size_map);

const reverse_culet_size_map = Object.entries(culet_size_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

const fluorescence_map = {
	N: 'None',
	F: 'Faint',
	M: 'Medium',
	S: 'Strong',
	VS: 'Very Strong',
};

const fluorescence_values = Object.keys(fluorescence_map);

const reverse_fluorescence_map = Object.entries(fluorescence_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});


const std_grade_map = {
	EX: 'Excellent',
	VG: 'Very Good',
	G: 'Good',
	F: 'Fair'
};

const std_grade_values = Object.keys(std_grade_map);

const reverse_std_grade_map = Object.entries(std_grade_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

const cut_map = std_grade_map;

const cut_values = std_grade_values;

const reverse_cut_map = reverse_std_grade_map;

const polish_map = std_grade_map;

const polish_values = std_grade_values;

const reverse_polish_map = reverse_std_grade_map;

const symmetry_map = std_grade_map;

const symmetry_values = std_grade_values;

const reverse_symmetry_map = reverse_std_grade_map;

const lab_grown_values = [0, 1];

const lab_grown_map = {
	'0': 'N',
	'1': 'Y'
};

const reverse_lab_grown_map = {
	'n': 0,
	'y': 1 
};

const fancy_color_map = {
	YELLOW: 'Yellow',
	PINK: 'Pink',
	PURPLE: 'Purple', 
	RED: 'Red',
	BLUE: 'Blue',
	GREEN: 'Green',
	ORANGE: 'Orange',
	BROWN: 'Brown',
	BLACK: 'Black',
	GRAY: 'Gray',
};

const fancy_color_values = Object.keys(fancy_color_map);

const reverse_fancy_color_map = Object.entries(fancy_color_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

const fancy_color_overtone_map = fancy_color_map;

const fancy_color_overtone_values = fancy_color_values;

const reverse_fancy_color_overtone_map = reverse_fancy_color_map;

const fancy_color_intensity_map = {
	FL: 'Fancy Light',
	FA: 'Fancy',
	FI: 'Fancy Intense',
	FV: 'Fancy Vivid',
	FP: 'Fancy Deep',
	FD: 'Fancy Dark'
};

const fancy_color_intensity_values =Object.keys(fancy_color_intensity_map);

const reverse_fancy_color_intensity_map = Object.entries(fancy_color_intensity_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

module.exports = {
	shape_map,
	shape_values,
	reverse_shape_map,
	color_map,
	color_values,
	reverse_color_map,
	clarity_map,
	clarity_values,
	reverse_clarity_map,
	cut_map,
	cut_values,
	reverse_cut_map,
	culet_size_map,
	culet_size_values,
	reverse_culet_size_map,
	polish_map,
	polish_values,
	reverse_polish_map,
	fluorescence_map,
	fluorescence_values,
	reverse_fluorescence_map,
	symmetry_map,
	symmetry_values,
	reverse_symmetry_map,
	lab_grown_map,
	lab_grown_values,
	reverse_lab_grown_map,
	fancy_color_map,
	fancy_color_values,
	reverse_fancy_color_map,
	fancy_color_intensity_map,
	fancy_color_intensity_values,
	reverse_fancy_color_intensity_map,
	fancy_color_overtone_map,
	fancy_color_overtone_values,
	reverse_fancy_color_overtone_map,
};