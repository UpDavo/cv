"use client";
import { useState } from "react";

export default function Experience2() {
  // JSON con la información
  const data = {
	Heimdal: {
	  title: "Heimdal S.A.S",
	  image: "heimdal.png",
	  description: [
		"Developed custom dashboards for clients like AbInBev, improving decision-making and reducing response time by 30%.",
		"Generated reports with Python and Linux using cron jobs, automating data extraction and delivery.",
		"Created APIs in NestJS for real-time alerts between multiple e-commerce services, integrating WhatsApp, Telegram, and custom webhooks.",
	  ],
	  skills: ["Python", "NestJS", "React", "AWS", "Databricks"],
	},
	ArHoldings: {
	  title: "Ar Holdings",
	  image: "ar.png",
	  description: [
		"Developed a scheduling app in Python (Django + Tailwind), leveraging AI models to predict store traffic and auto-assign staff shifts.",
		"Built scalable Django projects, including wholesale clothing management systems.",
		"Created .NET and React plugins, integrating loyalty card billing systems with Shopify.",
	  ],
	  skills: ["Python", "Django", "Tailwind", ".NET", "React", "AWS", "RabbitMQ"],
	},
	Mavenroad: {
	  title: "Mavenroad",
	  image: "maven.png",
	  description: [
		"Enhanced social network data analysis using Databricks, improving accuracy by 30%.",
		"Developed Angular applications connected to Databricks in Azure for data organization and dashboard visualization.",
		"Implemented advanced techniques in React and Databricks to create user-friendly interfaces.",
	  ],
	  skills: ["Angular", "React", "Databricks", "Azure", "AWS", "Python"],
	},
	UEES: {
	  title: "Universidad Espiritu Santo",
	  image: "uees.png",
	  description: [
		"Led the development of the UEES school website, increasing traffic by 40% and enrollment by 25%.",
		"Unified school networks with CRM and marketing automation, resulting in a 25% increase in enrollment and a 20% reduction in administrative workload.",
		"Developed data capture forms and analyzed user behavior through pixels, integrating social network data.",
	  ],
	  skills: ["WordPress", "PHP", "JavaScript", "ActiveCampaign", "Google Ads"],
	},
  };
  

  const [selectedCompany, setSelectedCompany] = useState("Heimdal");
  const [hoveredCompany, setHoveredCompany] = useState(null); // Estado para el hover

  // Variable para el color del fondo activo
  const activeBackgroundColor = "rgb(64, 81, 47)";

  const handleSelection = (company) => {
    setSelectedCompany(company);
  };

  return (
    <>
      <section id="portfolio" className="section-experience pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1">
              <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
                <div className="d-flex align-items-center">
                  <svg
                    className="text-primary-2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={6}
                    viewBox="0 0 5 6"
                    fill="none"
                  >
                    <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                  </svg>
                  <span className="text-linear-4 d-flex align-items-center">
                    Experience
                  </span>
                </div>
                <h3>
                  +6
                  <span className="text-300"> years of </span>
                  passion
                  <span className="text-300">
                    {" "}
                    for <br />
                    programming techniques
                  </span>
                </h3>
                <div className="row mt-5">
                  <div className="col-lg-4">
                    <div className="d-flex flex-column gap-2">
                      {Object.keys(data).map((company) => (
                        <button
                          key={company}
                          className="border border-1 rounded-3 p-3 text-start"
                          style={{
                            backgroundColor:
                              selectedCompany === company ||
                              hoveredCompany === company
                                ? activeBackgroundColor
                                : "transparent",
                            transition: "background-color 0.3s",
							
                          }}
                          onMouseEnter={() => setHoveredCompany(company)}
                          onMouseLeave={() => setHoveredCompany(null)}
                          onClick={() => handleSelection(company)}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={`assets/imgs/home-page-2/experience/${data[company].image}`}
                              alt={company}
                              width={70}
                            />
                            <div className="d-flex flex-column ms-2">
                              <h5 className="mb-1">{company}</h5>
                              <span className="text-300">
                                {data[company].title}
                              </span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0">
                    <h6 className="text-linear-4">
                      {data[selectedCompany].title}
                    </h6>
                    <ul className="mt-4">
                      {data[selectedCompany].description.map((desc, index) => (
                        <li key={index} className="text-dark mb-3">
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex flex-wrap align-items-center gap-3 mt-7">
                      {data[selectedCompany].skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-300 border border-1 px-3 py-1"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="zelio"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
