var bio = {
	"name": "Morgan Porritt",
	"role": "Software Developer",
	"contacts": {
		"mobile": "123-123-1234",
		"email": "morganporritt@gmail.com",
		"github": "morganporritt",
		"twitter": "NA",
		"location": "Logan UT"
	},
	"welcomeMessage": "Hello",
	"skills": ["PHP", "Javascript", "HTML", "CSS"],
	"biopic": "/images/fry.jpg",
	"display": "diplayBio()"
};

var education = {
	"schools": [{
		"name": "Utah State University",
		"location": "Logan UT",
		"degree": "BA",
		"majors": ["Computer Science", "Business"],
		"dates": "2010-2015",
		"url": "http://www.usu.edu"
	}, {
		"name": "Bear River High School",
		"location": "Garland UT",
		"degree": "Diploma",
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

var work = {
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

var projects = {
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


// Header/Bio Section

bio.skills.forEach(function (e) {
    $("#header").prepend(HTMLskills.replace("%data%", e));
});

$("#header").prepend(HTMLskillsStart);
$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
$("#header").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").prepend(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#header").prepend(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


// Education Section

$("#education").append(HTMLschoolStart);
education.schools.forEach(function (e) {
    var buildName = HTMLschoolName.replace("%data%", e.name).replace("%link%", e.url) + HTMLschoolDegree.replace('%data%', e.degree);
    $("#education").append(buildName);
    $("#education").append(HTMLschoolDates.replace("%data%", e.dates));
    $("#education").append(HTMLschoolLocation.replace("%data%", e.location));
   
    e.majors.forEach(function (m) {
        $("#education").append(HTMLschoolMajor.replace("%data%", m));
    });
});

$("#education").append(HTMLonlineClasses);
education.onlineCourses.forEach(function (e) {
    var buildName = HTMLonlineTitle.replace("%data%", e.title).replace("%link%", e.url) + HTMLonlineSchool.replace('%data%', e.school);
    $("#education").append(buildName);
    $("#education").append(HTMLonlineDates.replace("%data%", e.dates));
    $("#education").append(HTMLonlineURL.replace("%data%", e.url));
});

