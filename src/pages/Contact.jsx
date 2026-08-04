import { Helmet } from "react-helmet-async";
import "../styles/Contact.css";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | QuizMaster</title>

        <meta
          name="description"
          content="Contact QuizMaster for questions, suggestions and feedback."
        />
      </Helmet>

      <div className="contact-page">

        <div className="contact-container">

          <h1>Contact Us</h1>

          <p className="contact-text">
            Have a question, suggestion or feedback?
            We'd love to hear from you.
          </p>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              📩 Send Message
            </button>

          </form>

          <div className="contact-info">

            <h3>Contact Information</h3>

            <p>📧 Email: support@quizmaster.com</p>

            <p>🌐 Website: www.quizmaster.com</p>

            <p>📍 Pakistan</p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Contact;