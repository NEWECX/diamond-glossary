'use strict';

const certificate_full_names = {
	GIA: 'The Gemological Institute of America',
	AGSL: 'American GEM Society Laboratories',
	HRD: 'Diamond High Council',
	IGI: 'International Gemological Institute',
	GCAL: 'GEM Certification & Assurance LAB',
	DF: 'Diamond Foundry',
	EGL: 'European Gemological Laboratories',
	GHI: 'Gemology Headquarters International Laboratory',
	GSI: 'Gemological Science International',
	IIDGR: 'International Institute of Diamond Grading & Research',
	PGS: 'Professional GEM Science Laboratory',
	BSC: 'Biological Safety Cabinet Testing & Certification',
	JGS: 'J.B. Grading System',
	WGI: 'World Gemological Institute',
	EDR: 'Lloyds Family Jewellery Certificate',
	LGC: 'The UK’s designated National Measurement Institute for chemical and bioanalytical measurements'
};

const certificate_lab_map = {
	GIA: 'GIA', 		
	AGSL: 'AGSL',  		
	HRD: 'HRD', 		
	IGI: 'IGI',		
	GCAL: 'GCAL', 		
	DF: 'DF',			
	EGL: 'EGL',			
	GHI: 'GHI', 		
	GSI: 'GSI', 		
	IIDGR: 'IIDGR', 	
	PGS: 'PGS',
	BSC: 'BSC',
	JGS: 'JGS',
	WGI: 'WGI',
	EDR: 'EDR',
	LGC: 'LGC',
};

const certificate_lab_values = Object.keys(certificate_lab_map);

const reverse_certificate_lab_map = Object.entries(certificate_lab_map).reduce((a, [key, val]) => ({...a, [val.toLowerCase()]: key}), {});

module.exports = {
	certificate_full_names,
    certificate_lab_map,
	certificate_lab_values,
    reverse_certificate_lab_map,
};