import { Helmet } from "react-helmet-async";
import "../styles/Terms.css";

function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | QuizMaster</title>

        <meta
          name="description"
          content="Read the official Terms and Conditions of QuizMaster. Learn about user responsibilities, quiz usage, intellectual property and website policies."
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

        <meta
          property="og:type"
          content="website"
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
              By accessing and using QuizMaster, you agree to comply
              with these Terms & Conditions. If you do not agree with
              these terms, please discontinue using this website.
            </p>
          </section>

          <section>
            <h2>2. User Responsibilities</h2>

            <p>
              Users must provide accurate information where required
              and use QuizMaster only for educational and lawful
              purposes. Users must not attempt to misuse, disrupt,
              damage, or gain unauthorized access to the website or
              its services.
            </p>
          </section>

          <section>
            <h2>3. Educational Content</h2>

            <p>
              QuizMaster provides quizzes, questions, answers, and
              explanations for educational and informational purposes.
              While we make reasonable efforts to provide accurate
              content, we do not guarantee that every question,
              answer, or explanation will always be complete, current,
              or free from errors.
            </p>
          </section>

          <section>
            <h2>4. Quiz Results and Scores</h2>

            <p>
              Quiz scores, results, leaderboard positions, and other
              performance information are provided for learning and
              entertainment purposes. QuizMaster does not guarantee
              that scores or rankings will always be available,
              permanent, or error-free.
            </p>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>

            <p>
              Unless otherwise stated, the QuizMaster name, branding,
              original text, graphics, designs, quiz content, and
              website materials are owned by or licensed to QuizMaster.
              Unauthorized copying, reproduction, modification,
              redistribution, or commercial use of protected content
              is not permitted without appropriate permission.
            </p>
          </section>

          <section>
            <h2>6. Third-Party Services and Links</h2>

            <p>
              QuizMaster may use third-party services or provide links
              to external websites. These services and websites are
              operated independently and may have their own terms,
              policies, and practices. QuizMaster is not responsible
              for the content, availability, or policies of external
              websites.
            </p>
          </section>

          <section>
            <h2>7. Website Availability</h2>

            <p>
              We aim to keep QuizMaster available and functioning
              properly, but we do not guarantee uninterrupted access.
              The website may occasionally be unavailable because of
              maintenance, updates, technical problems, or other
              circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>

            <p>
              To the extent permitted by applicable law, QuizMaster
              shall not be liable for direct, indirect, incidental,
              or consequential damages arising from the use of the
              website or reliance on its educational content.
            </p>
          </section>

          <section>
            <h2>9. Changes to These Terms</h2>

            <p>
              We may update or modify these Terms & Conditions when
              necessary. Changes will become effective when the
              updated terms are published on this page. Continued use
              of QuizMaster after changes are published means that you
              accept the updated terms.
            </p>
          </section>

          <section>
            <h2>10. Contact Us</h2>

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