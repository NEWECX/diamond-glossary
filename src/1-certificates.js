'use strict';

const certificate_lab_values = [
	'AGSL',
	'DF',
	'EGL',
	'GCAL',
	'GIA',
	'GHI',
	'GSI',
	'HRD',
	'IGI',
	'IIDGR',
	'PGS',
];

const certificate_full_names = {
	AGSL: 'American GEM Society Laboratories',
	DF: 'Diamond Foundry',
	EGL: 'European Gemological Laboratories',
	GCAL: 'GEM Certification & Assurance LAB',
	GIA: 'The Gemological Institute of America',
	GHI: 'Gemology Headquarters International Laboratory',
	GSI: 'Gemological Science International',
	HRD: 'Diamond High Council',
	IGI: 'International Gemological Institute',
	IIDGR: 'International Institute of Diamond Grading & Research',
	PGS: 'Professional GEM Science Laboratory',
};

const certificate_lab_map = {
	AGSL: 'AGSL',  		
	DF: 'DF',			
	EGL: 'EGL',			
	GCAL: 'GCAL', 		
	GHI: 'GHI', 		
	GIA: 'GIA', 		
	GSI: 'GSI', 		
	HRD: 'HRD', 		
	IGI: 'IGI',		
	IIDGR: 'IIDGR', 	
	PGS: 'PGS', 		
};

const reverse_certificate_lab_map = {
	agsl: 'AGSL',  		
	ags: 'AGSL',  		
	df: 'DF',			
	egl: 'EGL',			
	gcal: 'GCAL', 		
	ghi: 'GHI', 		
	gia: 'GIA', 		
	gsi: 'GSI', 		
	hrd: 'HRD', 		
	igi: 'IGI',		
	iidgr: 'IIDGR', 	
	pgs: 'PGS', 		
};

module.exports = {
	certificate_lab_values,
	certificate_full_names,
    certificate_lab_map,
    reverse_certificate_lab_map,
};