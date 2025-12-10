export interface PersonalInfo {
	name: string;
	nameKo: string;
	title: string;
	email: string;
	phone: string;
	intro: string;
	description: string;
}

export interface Links {
	github: string;
	blog: string;
	linkedin: string;
}

export interface Responsibility {
	category: string;
	items: string[];
}

export interface Employment {
	id: string;
	company: string;
	companyEn: string;
	website?: string;
	position: string;
	type?: string;
	period: string;
	responsibilities: Responsibility[];
	stack?: string[];
}

export interface Project {
	id: string;
	company: string;
	companyEn: string;
	productLink?: string;
	thevcLink?: string;
	position: string;
	period: string;
	responsibilities: Responsibility[];
	stack?: string[];
}

export interface Education {
	school: string;
	schoolKo: string;
	degree: string;
	major?: string;
	period: string;
}

export interface Skills {
	primary: string[];
	additional: string[];
}

export interface Language {
	language: string;
	languageKo: string;
	level: string;
	certification: string;
}

export interface ResumeData {
	personal: PersonalInfo;
	links: Links;
	employment: Employment[];
	employmentEngineer: Employment[];
	education: Education[];
	skills: Skills;
	languages: Language[];
	projects: Project[];
}
