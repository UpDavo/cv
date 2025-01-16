"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  // spaceBetween: 20,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default function Projects2() {
  const projects = [
    {
      title: "AI Scheduling System",
      description:
        "Created scalable scheduling applications with AI models, automating staff shift assignments at Ar Holdings.",
      client: "Ar Holdings",
      completionTime: "8 months",
      technologies: ["Django", "Python", "Tailwind", "AWS"],
      image: "schedule.png",
    },
    {
      title: "Intelligent Mirror for Virtual Clothing Fitting",
      description:
        "Developed a smart mirror that allows customers to virtually try on clothing in-store, providing a seamless shopping experience.",
      client: "NFTs Latam",
      completionTime: "3 months",
      technologies: ["React", "AI Models", "Computer Vision", "SnapAR"],
      image: "ar.png",
    },
	{
		title: "Exploreit Ecommerce Platform",
		description:
		  "Designed and developed a comprehensive ecommerce platform for Exploreit, integrating advanced features such as secure payment processing, inventory management, and analytics dashboards. Optimized performance with PostgreSQL and implemented robust backend solutions using Django, resulting in a seamless user experience and efficient operations.",
		client: "Exploreit",
		completionTime: "4 months",
		technologies: ["Django", "PostgreSQL", "Python", "Linux"],
		image: "exploreit.png",
	  },
    {
      title: "AI-Powered Flutter App for Pediasure",
      description:
        "Created a Flutter app for Pediasure using AI to simulate and rejuvenate doctors' appearances, aimed at promoting the brand.",
      client: "NFTs Latam",
      completionTime: "3 months",
      technologies: ["Flutter", "Javascript", "AI Models"],
      image: "pediasure.jpeg",
    },
    {
      title: "School CRM Integration",
      description:
        "Unified school networks with CRM and marketing automations at UEES, increasing student enrollment by 25%.",
      client: "UEES",
      completionTime: "4 months",
      technologies: ["WordPress", "PHP", "ActiveCampaign"],
      image: "uees.png",
    },
    {
      title: "Social Network Data Analysis",
      description:
        "Enhanced social network data analysis at Mavenroad using Databricks, achieving a 30% increase in accuracy and efficiency.",
      client: "Mavenroad",
      completionTime: "6 months",
      technologies: ["Databricks", "Python", "React", "AWS"],
      image: "databricks.png",
    },
    {
      title: "VR App for Pycca: 360° Ecuador Experience",
      description:
        "Developed a VR application for Pycca that offers a 360° virtual reality experience of Ecuadorian landmarks, enhancing customer engagement.",
      client: "NFTs Latam",
      completionTime: "3 months",
      technologies: ["React", "VR", "Javascript", "360° Photography"],
      image: "pyca.jpg",
    },
    
  ];

  return (
    <div className="section-projects-2 pt-5">
      <div className="container">
        <div className="rounded-3 border border-1 position-relative overflow-hidden">
          <div className="box-linear-animation position-relative z-1">
            <div className="p-lg-8 p-md-6 p-3 position-relative z-1">
              <div className="d-flex align-items-center">
                <h3>My Recent Works</h3>
              </div>
              <Swiper
                {...swiperOptions}
                className="swiper slider-two pb-3 position-relative"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            className="w-100"
                            src={
                              "assets/imgs/home-page-2/projects/" +
                              project.image
                            }
                            alt={project.title}
                            height={400}
                            style={{
                              objectFit: "cover",
                              objectPosition: "left top",
                              width: "100%",
                              height: "400px",
                            }}
                          />
                        </div>

                        <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                          <h4 className="text-linear-4">{project.title}</h4>
                          <p>{project.description}</p>
                          <ul className="mt-4 list-unstyled">
                            <li className="text-secondary-2 mb-3 border-bottom pb-3">
                              <strong>Client:</strong> {project.client}
                            </li>
                            <li className="text-secondary-2 mb-3 border-bottom pb-3">
                              <strong>Completion Time:</strong>{" "}
                              {project.completionTime}
                            </li>
                            <li className="text-secondary-2 mb-3 border-bottom pb-3">
                              <strong>Technologies:</strong>{" "}
                              {project.technologies.join(", ")}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
