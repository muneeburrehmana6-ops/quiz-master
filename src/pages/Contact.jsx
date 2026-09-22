import { Helmet } from "react-helmet-async";
import "../styles/Contact.css";

const CONTACT_EMAIL = "support@quizmasterlearn.com";

function handleSubmit(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const subject = encodeURIComponent(`Message from ${form.get("name")}`);
  const body = encodeURIComponent(
    `${form.get("message")}\n\nFrom: ${form.get("name")} (${form.get("email")})`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact QuizMaster Learn - Get in Touch</title>

        <meta
          name="description"
          content="Contact QuizMaster Learn for questions, suggestions, feedback, and support about our online quizzes and learning platform."
        />

        <meta
          name="keywords"
          content="contact QuizMaster Learn, quiz support, online quiz support, quiz feedback, educational platform contact"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://www.quizmasterlearn.com/contact"
        />

        <meta
          property="og:title"
          content="Contact QuizMaster Learn - Get in Touch"
        />

        <meta
          property="og:description"
          content="Contact QuizMaster Learn for questions, suggestions, feedback, and support."
        />

        <meta
          property="og:url"
          content="https://www.quizmasterlearn.com/contact"
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <div className="contact-page">
        <div className="contact-container">

          <h1>Contact Us</h1>

          <p className="contact-text">
            Have a question, suggestion or feedback?
            We'd love to hear from you.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              📩 Send Message
            </button>

          </form>

          <div className="contact-info">

            <h3>Contact Information</h3>

            <p>📧 Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>

            <p>🌐 Website: www.quizmasterlearn.com</p>

            <p>📍 Pakistan</p>

          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;