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
	PE: 'Pentagon',
	OC: 'Octagon',
	ST: 'Star',
	HE: 'Hexagon',
	HM: 'Half Moon',
	TZ: 'Trapezoid',
	KI: 'Kite',
	//BR: 'Briolette', removed due to use BR for RD is common @ 02/19/2022
	BT: 'Briolette',
	DE: 'Decagon',
	LO: 'Lozenge',
	OT: 'Other'
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
	VL: 'Very Large'
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

const cut_map = {
	ID: 'Ideal',
	VG: 'Very Good',
	G: 'Good',
	F: 'Fair',
	P: 'Poor'
};

const cut_values = Object.keys(cut_map);

const reverse_cut_map = Object.entries(cut_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

const std_grade_map = {
	EX: 'Excellent',
	VG: 'Very Good',
	G: 'Good',
	F: 'Fair',
	P: 'Poor'
};

const std_grade_values = Object.keys(std_grade_map);

const reverse_std_grade_map = Object.entries(std_grade_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

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
	WHITE: 'White'
};

const fancy_color_short_map = {
	Y: 'YELLOW',
	PI: 'PINK',
	PU: 'PURPLE', 
	R: 'RED',
	BLU: 'BLUE',
	GRE: 'GREEN',
	O: 'ORANGE',
	BRO: 'BROWN',
	BLA: 'BLACK',
	GRA: 'GRAY',
	W: 'WHITE'
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

// ignore overtone colors
//
const colors_to_fancy_colors = {

	FLY: {fancy_color: 'YELLOW', fancy_color_intensity: 'FL'},
	FY: {fancy_color: 'YELLOW', fancy_color_intensity: 'FA'},
	FIY: {fancy_color: 'YELLOW', fancy_color_intensity: 'FI'},
	FVY: {fancy_color: 'YELLOW', fancy_color_intensity: 'FV'},
	FPY: {fancy_color: 'YELLOW', fancy_color_intensity: 'FP'},
	FDY: {fancy_color: 'YELLOW', fancy_color_intensity: 'FD'},

	FLO: {fancy_color: 'ORANGE', fancy_color_intensity: 'FL'},
	FO: {fancy_color: 'ORANGE', fancy_color_intensity: 'FA'},
	FIO: {fancy_color: 'ORANGE', fancy_color_intensity: 'FI'},
	FVO: {fancy_color: 'ORANGE', fancy_color_intensity: 'FV'},
	FPO: {fancy_color: 'ORANGE', fancy_color_intensity: 'FP'},
	FDO: {fancy_color: 'ORANGE', fancy_color_intensity: 'FD'},

	FLR: {fancy_color: 'RED', fancy_color_intensity: 'FL'},
	FR: {fancy_color: 'RED', fancy_color_intensity: 'FA'},
	FIR: {fancy_color: 'RED', fancy_color_intensity: 'FI'},
	FVR: {fancy_color: 'RED', fancy_color_intensity: 'FV'},
	FPR: {fancy_color: 'RED', fancy_color_intensity: 'FP'},
	FDR: {fancy_color: 'RED', fancy_color_intensity: 'FD'},

	FLBLU: {fancy_color: 'BLUE', fancy_color_intensity: 'FL'},
	FBLU: {fancy_color: 'BLUE', fancy_color_intensity: 'FA'},
	FIBLU: {fancy_color: 'BLUE', fancy_color_intensity: 'FI'},
	FVBLU: {fancy_color: 'BLUE', fancy_color_intensity: 'FV'},
	FPBLU: {fancy_color: 'BLUE', fancy_color_intensity: 'FP'},
	FDBLU: {fancy_color: 'BLUE', fancy_color_intensity: 'FD'},

	FLBLA: {fancy_color: 'BLACK', fancy_color_intensity: 'FL'},
	FBLA: {fancy_color: 'BLACK', fancy_color_intensity: 'FA'},
	FIBLA: {fancy_color: 'BLACK', fancy_color_intensity: 'FI'},
	FVBLA: {fancy_color: 'BLACK', fancy_color_intensity: 'FV'},
	FPBLA: {fancy_color: 'BLACK', fancy_color_intensity: 'FP'},
	FDBLA: {fancy_color: 'BLACK', fancy_color_intensity: 'FD'},

	FLBRO: {fancy_color: 'BROWN', fancy_color_intensity: 'FL'},
	FBRO: {fancy_color: 'BROWN', fancy_color_intensity: 'FA'},
	FIBRO: {fancy_color: 'BROWN', fancy_color_intensity: 'FI'},
	FVBRO: {fancy_color: 'BROWN', fancy_color_intensity: 'FV'},
	FPBRO: {fancy_color: 'BROWN', fancy_color_intensity: 'FP'},
	FDBRO: {fancy_color: 'BROWN', fancy_color_intensity: 'FD'},

	FLPI: {fancy_color: 'PINK', fancy_color_intensity: 'FL'},
	FPI: {fancy_color: 'PINK', fancy_color_intensity: 'FA'},
	FIPI: {fancy_color: 'PINK', fancy_color_intensity: 'FI'},
	FVPI: {fancy_color: 'PINK', fancy_color_intensity: 'FV'},
	FPPI: {fancy_color: 'PINK', fancy_color_intensity: 'FP'},
	FDPI: {fancy_color: 'PINK', fancy_color_intensity: 'FD'},

	FLPU: {fancy_color: 'PURPLE', fancy_color_intensity: 'FL'},
	FPU: {fancy_color: 'PURPLE', fancy_color_intensity: 'FA'},
	FIPU: {fancy_color: 'PURPLE', fancy_color_intensity: 'FI'},
	FVPU: {fancy_color: 'PURPLE', fancy_color_intensity: 'FV'},
	FPPU: {fancy_color: 'PURPLE', fancy_color_intensity: 'FP'},
	FDPU: {fancy_color: 'PURPLE', fancy_color_intensity: 'FD'},

	FLGRE: {fancy_color: 'GREEN', fancy_color_intensity: 'FL'},
	FGRE: {fancy_color: 'GREEN', fancy_color_intensity: 'FA'},
	FIGRE: {fancy_color: 'GREEN', fancy_color_intensity: 'FI'},
	FVGRE: {fancy_color: 'GREEN', fancy_color_intensity: 'FV'},
	FPGRE: {fancy_color: 'GREEN', fancy_color_intensity: 'FP'},
	FDGRE: {fancy_color: 'GREEN', fancy_color_intensity: 'FD'},
	
	FLGRA: {fancy_color: 'GRAY', fancy_color_intensity: 'FL'},
	FGRA: {fancy_color: 'GRAY', fancy_color_intensity: 'FA'},
	FIGRA: {fancy_color: 'GRAY', fancy_color_intensity: 'FI'},
	FVGRA: {fancy_color: 'GRAY', fancy_color_intensity: 'FV'},
	FPGRA: {fancy_color: 'GRAY', fancy_color_intensity: 'FP'},
	FDGRA: {fancy_color: 'GRAY', fancy_color_intensity: 'FD'},

	FLW: {fancy_color: 'WHITE', fancy_color_intensity: 'FL'},
	FW: {fancy_color: 'WHITE', fancy_color_intensity: 'FA'},
	FIW: {fancy_color: 'WHITE', fancy_color_intensity: 'FI'},
	FVW: {fancy_color: 'WHITE', fancy_color_intensity: 'FV'},
	FPW: {fancy_color: 'WHITE', fancy_color_intensity: 'FP'},
	FDW: {fancy_color: 'WHITE', fancy_color_intensity: 'FD'},

};

const fancy_color_color_values = Object.keys(colors_to_fancy_colors);

const fancy_color_color_map = Object.entries(colors_to_fancy_colors).map(x => {
	const c = Object.values(x[1]); 
	return [x[0], `${fancy_color_intensity_map[c[1]]} ${c[0].charAt(0)}${c[0].substr(1).toLowerCase()}`];
}).reduce((a, [k, v]) => ({...a, [k]: v}), {});

const reverse_fancy_color_color_map = Object.entries(fancy_color_color_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

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
	colors_to_fancy_colors,
	fancy_color_color_values,
	fancy_color_color_map,
	fancy_color_short_map,
	reverse_fancy_color_color_map
};