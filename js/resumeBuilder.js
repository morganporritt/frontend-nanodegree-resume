/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name": "Morgan Porritt",
	"role": "Software Developer",
	"contacts": {
		"mobile": "123-123-1234",
		"email": "test@test.com",
		"github": "morganporritt",
		"twitter": "NA",
		"location": "Logan UT"
	},
	"welcomeMessage": "Hello",
	"skills": ["PHP", "Javascript", "HTML", "CSS"],
	"biopic": "/images/fry.jpg",
	"display": "diplayBio()"
};

var education {
	"schools": [{
		"name": "Utah State University",
		"location": "Logan UT",
		"degree": "Bachelors",
		"majors": ["Computer Science"],
		"dates": "2010-2015",
		"url": "http://www.usu.edu"
	}, {
		"name": "Bear River High School",
		"location": "Garland UT",
		"degree": "High School Diploma",
		"majors": ["NA"],
		"dates": "2004-2007",
		"url": "http://www.brhs.besd.net/"
	}],
	"onlineCourses": [{
		"title": "test",
		"school": "USU",
		"dates": "2010-2010",
		"url": "http://usu.edu"
	}, {
		"title": "test2",
		"school": "USU",
		"dates": "2010-2010",
		"url": "http://usu.edu"
	}],
	"display": "displayEducation()"
};

var work {
	"jobs": [{
		"employer": "Autoliv",
		"title": "Intern",
		"location": "Brigham City",
		"dates": "2010-2014",
		"description": "autoliv was great"
	}, {
		"employer": "RR Donnelly",
		"title": "Intern",
		"location": "Brigham City",
		"dates": "2010-2014",
		"description": "autoliv was great"
	}, {
		"employer": "Integra Financial Services",
		"title": "Intern",
		"location": "Brigham City",
		"dates": "2010-2014",
		"description": "autoliv was great"
	}],
	"display": "displayJobs()"
};

var projects {
	"projects": [{
		"title": "Project 1",
		"dates": "2010-2014",
		"description": "project 1 is cool",
		"images": [
			"/images/1.png",
			"/images/2.png"
		]
	}, {
		"title": "Project 2",
		"dates": "2010-2014",
		"description": "project 2 is cool",
		"images": [
			"/images/3.png",
			"/images/4.png"
		]
	}],
	"display": "displayProjects()"
};


$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").prepend(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
//$("#header").prepend(HTMLcontactGeneric);
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

