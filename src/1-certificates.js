'use strict';

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
	BSC: 'Biological Safety Cabinet Testing & Certification',
	JGS: 'J.B. Grading System',
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
	BSC: 'BSC',
	JGS: 'JGS',		
};

const certificate_lab_values = Object.keys(certificate_lab_map);

const reverse_certificate_lab_map = Object.entries(certificate_lab_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

module.exports = {
	certificate_full_names,
    certificate_lab_map,
	certificate_lab_values,
    reverse_certificate_lab_map,
};