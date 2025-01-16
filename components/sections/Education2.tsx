export default function EducationAndAchievements() {
	const educationData = [
	  {
		year: "2023-2024",
		institution: "Inesdi Business Techschool",
		degree: "Master's Degree in Artificial Intelligence",
	  },
	  {
		year: "2017-2020",
		institution: "Universidad Espíritu Santo",
		degree: "Computer Science Engineer",
	  },
	  {
		year: "2017-NOW",
		institution: "Platzi",
		degree:
		  "Various Certificates (Web Development, Machine Learning, Emerging Technologies)",
	  },
	  {
		year: "2017-NOW",
		institution: "Udemy",
		degree:
		  "Various Certificates (Web Development, Machine Learning, Emerging Technologies)",
	  },
	];
  
	const significantAchievements = [
	  {
		year: "2024",
		achievement:
		  "Created scalable scheduling applications with AI models, automating staff shift assignments at Ar Holdings.",
	  },
	  {
		year: "2023",
		achievement:
		  "Developed a Django, SQL, and PostgreSQL connection for time tracking and payroll management at BUK, saving 10% in labor costs.",
	  },
	  {
		year: "2023",
		achievement:
		  "Led the development of custom dashboards at Heimdal for clients like AbInBev, improving decision-making and customer satisfaction.",
	  },
	  {
		year: "2022",
		achievement:
		  "Enhanced social network data analysis at Mavenroad using Databricks, achieving a 30% increase in accuracy and efficiency.",
	  },
	  {
		year: "2021",
		achievement:
		  "Unified school networks with CRM and marketing automations at UEES, increasing student enrollment by 25%.",
	  },
	];
  
	const listStyle:any = {
	  maxHeight: "350px", // Height for 5 elements approximately
	  overflowY: "auto",
	  position: "relative",
	  paddingRight: "15px",
	};
  
	const shadowStyle:any = {
	  position: "absolute",
	  bottom: "0",
	  left: "0",
	  right: "0",
	  height: "30px",
	  pointerEvents: "none",
	};
  
	return (
	  <section id="resume" className="section-education">
		<div className="container">
		  <div className="row">
			{/* Education Section */}
			<div className="col-lg-6 pt-3">
			  <div className="rounded-3 border border-1 position-relative h-100 overflow-hidden">
				<div className="box-linear-animation p-md-6 p-3">
				  <div className="d-flex align-items-center">
					<h2 className="mb-0 ms-2">Education</h2>
				  </div>
				  <div className="d-flex flex-column h-100 position-relative mt-5">
					<ul style={listStyle} className="ps-3">
					  {educationData.map((edu, index) => (
						<li key={index} className="position-relative z-1 mb-3">
						  <div className="d-flex gap-2">
							<p className="text-300 text-nowrap fw-regular mb-0">
							  {edu.year}:
							</p>
							<div>
							  <span className="text-primary-2">
								{edu.institution}
							  </span>
							  <p className="text-dark">{edu.degree}</p>
							</div>
						  </div>
						</li>
					  ))}
					</ul>
					<div style={shadowStyle}></div>
				  </div>
				</div>
			  </div>
			</div>
			{/* Significant Achievements Section */}
			<div className="col-lg-6 pt-3">
			  <div className="rounded-3 border border-1 position-relative h-100 overflow-hidden">
				<div className="box-linear-animation p-md-6 p-3">
				  <div className="d-flex align-items-center">
					<h2 className="mb-0 ms-2">Significant Achievements</h2>
				  </div>
				  <div className="d-flex flex-column h-100 position-relative mt-5">
					<ul style={listStyle} className="ps-3">
					  {significantAchievements.map((achievement, index) => (
						<li key={index} className="position-relative z-1 mb-3">
						  <div className="d-flex gap-2">
							<p className="text-300 text-nowrap fw-regular mb-0">
							  {achievement.year}:
							</p>
							<div>
							  <p className="text-dark">{achievement.achievement}</p>
							</div>
						  </div>
						</li>
					  ))}
					</ul>
					<div style={shadowStyle}></div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	);
  }
  