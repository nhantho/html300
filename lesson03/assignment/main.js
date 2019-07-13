
// Local data to represent JSON returned
const details = [
	{
    "name": "Steve Smith",
		"img": "unsplash-headshot.jpg",
    "jobTitle": "Project Manager",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },

  {
    "name": "Aaron Katz",
		"img": "unsplash-headshot.jpg",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },

  {
    "name": "Kyle Hendricks",
    "img": "unsplash-headshot.jpg",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },

  {
    "name": "Michael Jordan",
    "img": "unsplash-headshot.jpg",
    "jobTitle": "Point Guard",
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
       "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
];


// Use map() array method to generate articles for each object in our returned data
const contactTemplate = details.map((person, index) =>
  `<div class="outer-box">
  <div class="contact-card">
    <div class="contact" id="person-${index}">
      <div class="left-card">
       <img class="profile" src="img/unsplash-headshot.jpg" alt="Photo of Steve Smith, Project Manager">
        <h2 class="name">${person.name}</h2>
        <h3 class="jobTitle">${person.jobTitle}</h3>
      </div>
      <div class="right-card">
        <p class="company"><strong>Company: </strong>${person.company}</p>
        <p class="experience"><strong>Experience: </strong>${person.experience}</p>
        <p class="school"><strong>School: </strong>${person.school}</p>
        <p class="major"><strong>Major: </strong>${person.major}</p>
        <p class="email"><strong>Email: </strong>${person.email}</p>
				<p class="languages"><strong>Email: </strong>${person.languages}</p>
        <p class="icon"><img src="img/linkedin.svg" class="icon" alt="LinkedIn logo"> ${person.linkedInUrl}</p>
      </div>
    </div>
    </div>
    </div><br><br>`);




// Jquery for the template
$('.hook').append(contactTemplate);
