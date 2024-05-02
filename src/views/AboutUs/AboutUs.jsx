import React from "react";
import "../AboutUs/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-us-container">
      <section id="mission" className="section">
        <div className="section-content">
          <h1>OUR MISSION</h1>
          <p>
            We are dedicated to providing an unforgettable dining experience,
            combining exceptional food with outstanding service in a welcoming
            atmosphere.
          </p>
        </div>
      </section>
      <section id="history" className="section">
        <div className="section-content">
          <div className="history-content">
            <div className="history-image">
              <img src="../src/img/food.jpeg" alt="Our History" />
            </div>
            <div className="history-text">
              <h1>OUR HISTORY</h1>
              <p>
                Established in [Year], [Restaurant Name] has been a cornerstone of
                culinary excellence in [Location]. From our humble beginnings as a
                small family-owned eatery to becoming a beloved destination for food
                enthusiasts, our journey has been marked by passion, innovation, and
                a commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="realFood" className="section">
        <div className="section-content">
          <h1 className="pacifico-regular">Bon Appétit!</h1>
        </div>
      </section>
      <section id="hours-location" className="section">
        <div className="section-content">
          <h1>HOURS & LOCATION</h1>
          <p>
            <strong>HOURS</strong>
          </p>
          <p>
            <strong>Mon - Fri</strong>
            <br />
            12:00 pm - 10:00 pm
          </p>

          <p>
            <strong>Sat, Sun</strong>
            <br />
            11:00 am - 09:00 am
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6038.893020246441!2d-73.95015704999996!3d40.81815510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f6657fa896f5%3A0x6e4ea62a716049e1!2s160%20Convent%20Ave%2C%20New%20York%2C%20NY%2010031!5e0!3m2!1sen!2sus!4v1713922146973!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
