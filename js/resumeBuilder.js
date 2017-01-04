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
    "welcomeMessage": "There is no elevator to success — you have to take the stairs.",
    "skills": ["PHP", "Javascript", "HTML", "CSS"],
    "biopic": "/images/fishing.jpg",
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
        "title": "test class",
        "school": "USU",
        "dates": "2010-2010",
        "url": "http://usu.edu"
    }, {
        "title": "test class2",
        "school": "USU",
        "dates": "2010-2010",
        "url": "http://usu.edu"
    }],
};

var work = {
    "jobs": [{
        "employer": "Autoliv",
        "title": "Intern",
        "location": "Brigham City UT",
        "dates": "2010-2014",
        "description": "autoliv was great"
    }, {
        "employer": "RR Donnelly",
        "title": "Intern",
        "location": "Logan UT",
        "dates": "2010-2014",
        "description": "RRD was great"
    }, {
        "employer": "Integra Financial Services",
        "title": "Software Developer",
        "location": "North Logan UT",
        "dates": "Current",
        "description": "I love working at Integra Financial Services"
    }],
};

var projects = {
    "projects": [{
        "title": "Product Tracker",
        "dates": "2015",
        "description": "I developed an application using the MEAN web stack for tracking products. This was the final project for an independent study course that I did through Utah State University. During the course I self taught myslef how to develope web applications using the MEAN web stack.",
        "images": [
            "/images/productTracker.png"
        ]
    }, {
        "title": "Beat the Market",
        "dates": "2015",
        "description": "Wouldn’t it be wonderful if there was a program that could predict the future of the market? While knowing the future is impossible using history to make precise predictions based on the past is a reality.",
        "images": [
            "/images/beatTheMarket.jpg"
        ]
    }, {
        "title": "Geology Quiz",
        "dates": "2014",
        "description": "Created a responsive web app for the USU geology department. The app is a quiz of the geologic time scale of the earth. Its is intended to help students in learning all of the different time periods on the geologic time scale.",
        "images": [
            "/images/geology.png"
        ]
    }],
};

// Display all of the Header/Bio section of the resume.
bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    //$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(e) {
        $("#skills").append(HTMLskills.replace("%data%", e));
    });
};

// Display all of the education section of the resume.
education.display = function() {
    // Schools
    education.schools.forEach(function(e) {
        var schoolHTML = HTMLschoolStart +
            HTMLschoolName.replace("%data%", e.name).replace("%link%", e.url) + HTMLschoolDegree.replace("%data%", e.degree) +
            HTMLschoolDates.replace("%data%", e.dates) +
            HTMLschoolLocation.replace("%data%", e.location);
        var majors = "";
        e.majors.forEach(function(m) {
            majors += HTMLschoolMajor.replace("%data%", m);
        });
        schoolHTML += majors + HTMLschoolEnd;
        $("#education").append(schoolHTML);
    });

    // Online Courses
    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(e) {
        var courseHTML = HTMLschoolStart +
            HTMLonlineTitle.replace("%data%", e.title).replace("%link%", e.url) + HTMLonlineSchool.replace("%data%", e.school) +
            HTMLonlineDates.replace("%data%", e.dates) +
            HTMLonlineURL.replace("%data%", e.url) +
            HTMLschoolEnd;
        $("#education").append(courseHTML);
    });
};

// Displays all of the work section of the resume
work.display = function() {
    work.jobs.forEach(function(e) {
        var jobHTML = HTMLworkStart +
            HTMLworkEmployer.replace("%data%", e.employer) + HTMLworkTitle.replace("%data%", e.title) +
            HTMLworkDates.replace("%data%", e.dates) +
            HTMLworkLocation.replace("%data%", e.location) +
            HTMLworkDescription.replace("%data%", e.description) +
            HTMLworkEnd;
        $("#workExperience").append(jobHTML);
    });
};

// Displays all of the projects section of the resume
projects.display = function() {
    projects.projects.forEach(function(e) {
        var projectsHTML = HTMLprojectStart +
            HTMLprojectTitle.replace("%data%", e.title) +
            HTMLprojectDates.replace("%data%", e.dates) +
            HTMLprojectDescription.replace("%data%", e.description);
        var images = "";
        e.images.forEach(function(img) {
            images += HTMLprojectImage.replace("%data%", img);
        });

        projectsHTML += images +
            HTMLprojectEnd;
        $("#projects").append(projectsHTML);
    });
};

bio.display();
work.display();
projects.display();
education.display();