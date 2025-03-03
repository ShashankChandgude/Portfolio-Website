import React from 'react';

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {/* Experience 1 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Graduate Software Assistant</h3>
            <p>
              <strong>University of Houston Natural Sciences and Mathematics Career Center</strong> • Mar 2024 - Present
            </p>
            <ul>
              <li>
              Optimized data analysis and reporting using Microsoft Excel and Word for a student population of 6000, driving a 40% increase in engagement through actionable insights.
              </li>
              <li>
              Created 4 automated forms with Microsoft Forms and Power-Automate to streamline data collection for the HireNSM platform, improving user experience.
              </li>
              <li>
              Coordinated over 15 career events leveraging MS Teams and Outlook, increasing student participation by 33%, and created custom resume templates with HTML, CSS, and JavaScript to enhance student professional branding.
              </li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="timeline-item">
          <div className="timeline-content">
            <h3>System Engineer</h3>
            <p>
              <strong>Tata Consultancy Services</strong> • Jul 2021 - Aug 2023
            </p>
            <ul>
              <li>
              Digitalized resource management of 110 project resources by developing a web application with Java Spring Boot and JSP with Agile Methodology.
              </li>
              <li>
              Digitalized resource management of 110 project resources by developing a web application with Java Spring Boot and JSP with Agile Methodology.
              </li>
              <li>
              Designed 30+ APIs with MuleSoft Anypoint Studio. Automated API testing of 204 REST APIs by developing an API automation testing module using the cucumber framework and Node.js.
              </li>
              <li>
              Provided Application support for FileNet and Java claim management application by handling 800+ user inquiries and 1100+ incident tickets on Silva-ServiceNow.
              </li>
              <li>
              Led 5 weekly client discussions, establishing a structured agenda and follow-up process driving a measurable improvement in project completion rates by 20% over three months.
              </li>
            </ul>
          </div>
        </div>

        {/* Additional experiences can be added here */}
      </div>
    </section>
  );
}