var bio = {
    "name": "Manavi Singh",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+91-8971194903",
        "email": "ms1576@gmail.com",
        "github": "https://github.com/manavisingh",
        "linkedIn": "https://in.linkedin.com/in/manavisingh19",
        "location": "Mumbai"
    },
    "welcomeMessage": "Welcome to My resume page",
    "skills": ["git", "python", "html", "css", "svn", "unix/Linux", "Shell Scripting"],
    "biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJjAAAAJDcyMjI3NDk2LTYxMjQtNGZhZC05NjUxLTkwYTAxZmVkZjgxNQ.jpg"
};

var education = {
    "schools": [{
        "name": "Vellore Institute of Technoogy",
        "location": "Vellore",
        "degree": "BE",
        "majors": ["Chemical Engg"],
        "dates": "2013",
        "url": "http://www.vit.ac.in/"
    }],

    "onlineCourses": [{
        "title": "Web Developer Nanodegree",
        "school": "Udacity",
        "url": "https://www.udacity.com/",
        "date": "2016"
    }]
};

var work = {
    "jobs": [{
        "employer": "Accenture",
        "title": "Software Engineering Associate",
        "location": "Delhi",
        "dates": "2013 - 2014",
        "description": "Working as a build and release engineer building AT&T's software applications."
    }, {
        "employer": "Accenture",
        "title": "Software Engineering Analyst",
        "location": "Bangalore",
        "dates": "2014 - Present",
        "description": "Working on DevOps tool for continuous integration process using GIT, Jenkins and Maven."
    }]
};

var projects = {
    "projects": [{
        "title": "Python Mad lib Program",
        "dates": "2016",
        "description": "Built a mad lib program to take in user input for filling in the blanks in strings passed as paragraphs",
        "images": ["http://image.slidesharecdn.com/pivotaldstechnologytoolspublic-141016125745-conversion-gate02/95/pivotal-data-labs-technology-and-tools-in-our-data-scientists-arsenal-34-638.jpg?cb=1413464359"]
    }, {
        "title": "HTML CSS: My Dream Destination",
        "dates": "2016",
        "description": "An html page on my Dream Destination: Prague",
        "images": ["https://msdn.microsoft.com/dynimg/IC485704.png"]
    }]
};

bio.display = function() {

    //This is the heading with the Name and the Role.
    var HTMLName = HTMLheaderName.replace("%data%", bio.name);
    var HTMLRole = HTMLheaderRole.replace("%data%", bio.role);

    var HTMLTotal = HTMLName + HTMLRole;
    $("#header").append(HTMLTotal);


    //Displaying the top Contacts from JSON.

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedlinkedIn = HTMLLinkedIn.replace("%data%", bio.contacts.linkedIn);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    
    $(".flex-box1").append(formattedMobile,formattedemail,formattedGithub,formattedlinkedIn,formattedLocation);
    
    //The picture and the Welcome Message section.

    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMessage);


    //Looping through the skills

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var skill in bio.skills) {
            if (bio.skills.length > 0) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
    
};

//Displayin the work details in a function.

work.display = function() {

    //Looping through the jobs

    for (var job in work.jobs) {
        if (work.jobs.length > 0) {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            var formattedTotal = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedTotal,formattedDates,formattedLocation,formattedDescription);
            
        }
    }
};

//Internationalize Button

var inName = function(name) {
    var arr = name.split(" ");
    //console.log(arr);

    var name1 = arr[0];
    var name2 = arr[1];

    var new_name1 = name1.charAt(0).toUpperCase() + name1.slice(1);
    var new_name2 = name2.toUpperCase();

    name = new_name1 + " " + new_name2;
    console.log(new_name1 + " " + new_name2);

    return name;
};

projects.display = function() {
    if (projects.projects.length > 0) {

        $("#projects").append(HTMLprojectStart);
        for (var p in projects.projects) {
            if (projects.projects.length > 0) {
                var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
                var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
                var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[0]);

                $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription,formattedImage);
                
            }
        }
    }
};

// Eduction Details


education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (var school in education.schools) {
        if (education.schools.length > 0) {

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedmajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

            var formattedEducationHeading = formattedSchoolName + formattedDegree;

            $(".education-entry:last").append(formattedEducationHeading,formattedLocation,formattedDates,formattedmajors);

        }

    }

    $(".education-entry:last").append(HTMLonlineClasses);

                for (var course in education.onlineCourses) {
                if (education.onlineCourses.length > 0) {

                    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                    var formattedDatesOnline = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
                    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

                    var formattedOnlineClass = formattedTitle + formattedSchool;

                    $(".education-entry:last").append(formattedOnlineClass,formattedDatesOnline,formattedURL);
                    
                }   
            }

    };

bio.display();
work.display();
projects.display();
education.display();

inName("Manavi Singh");

$("#header").append(internationalizeButton);

// appending googleMap to mapDiv in the index.html to enable the Google maps.

$("#mapDiv").append(googleMap);