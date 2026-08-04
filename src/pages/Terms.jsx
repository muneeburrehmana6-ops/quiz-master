import { Helmet } from "react-helmet-async";
import "../styles/Terms.css";

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | QuizMaster</title>

        <meta
          name="description"
          content="Read the official Terms and Conditions of QuizMaster. Learn about user responsibilities, quiz usage, intellectual property, privacy and website policies."
        />

        <meta
          name="keywords"
          content="QuizMaster Terms, Terms and Conditions, Quiz Rules, Website Terms"
        />

        <meta
          name="author"
          content="QuizMaster"
        />

        <meta
          property="og:title"
          content="Terms & Conditions | QuizMaster"
        />

        <meta
          property="og:description"
          content="Official Terms and Conditions of QuizMaster."
        />
      </Helmet>

      <div className="terms-page">
        <div className="terms-container">

          <h1>Terms & Conditions</h1>

          <p className="terms-date">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using QuizMaster, you agree to comply with
              these Terms & Conditions. If you do not agree with these
              terms, please discontinue using this website.
            </p>
          </section>

          <section>
            <h2>2. User Responsibilities</h2>
            <p>
              Users must provide accurate information and use QuizMaster
              only for educational and lawful purposes. Misuse of the
              platform may result in restricted access.
            </p>
          </section>

          <section>
            <h2>3. Educational Content</h2>
            <p>
              All quizzes are provided for educational purposes. While we
              strive for accuracy, QuizMaster does not guarantee that all
              questions are completely free of errors.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              All quizzes, text, graphics, logos, designs and other
              website content are the property of QuizMaster unless
              otherwise stated. Unauthorized copying or redistribution is
              prohibited.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              QuizMaster shall not be liable for any direct or indirect
              damages resulting from the use of this website or reliance
              on its content.
            </p>
          </section>

          <section>
            <h2>6. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms &
              Conditions at any time. Continued use of the website means
              you accept the revised terms.
            </p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions regarding these Terms &
              Conditions, please visit our Contact page.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

export default Terms;