"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Contact2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  // Verifica si la cookie está presente al cargar el componente
  useEffect(() => {
    if (Cookies.get("formSubmitted")) {
      setIsFormDisabled(true);
    }
  }, []);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });

        // Establece una cookie que expira en 1 día
        Cookies.set("formSubmitted", "true", { expires: 1 });
        setIsFormDisabled(true);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <section
      id="contact"
      className="section-contact-2 position-relative pb-60 overflow-hidden"
      style={{ marginTop: 70 }}
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 pb-5 pb-lg-0">
            <div className="position-relative">
              <div className="position-relative z-2">
                <h3 className="text-primary-2 mb-3">Let’s connect</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isFormDisabled} // Deshabilita el campo si el formulario ya se envió
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control bg-3 border border-1 rounded-3"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isFormDisabled} // Deshabilita el campo si el formulario ya se envió
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control bg-3 border border-1 rounded-3"
                        id="message"
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isFormDisabled} // Deshabilita el campo si el formulario ya se envió
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary-2 rounded-2"
                        disabled={isFormDisabled} // Deshabilita el botón si el formulario ya se envió
                      >
                        {isFormDisabled
                          ? "Form already submitted"
                          : "Send Message"}
                        <i className="ri-arrow-right-up-line" />
                      </button>
                    </div>
                  </div>
                </form>
                <p className="mt-3">{status}</p>
              </div>
              <div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
            </div>
          </div>
		  <div className="col-lg-5 d-flex flex-column ps-lg-8">
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-mail-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">Email</span>
                <h6 className="mb-0">updavo@gmail.com</h6>
              </div>
              <a href="mailto:updavo@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
            </div>
            <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
              <div className="d-inline-block">
                <div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
                  <i className="ri-linkedin-fill text-primary-2 fs-26" />
                </div>
              </div>
              <div className="ps-3 h-100">
                <span className="text-400 fs-6">LinkedIn</span>
                <h6 className="mb-0">Updavo</h6>
              </div>
              <a href="https://linkedin.com/in/updavo" className="position-absolute top-0 start-0 w-100 h-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
