import { Helmet } from "react-helmet-async";
import "../styles/privacy.css";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | QuizMaster</title>

        <meta
          name="description"
          content="Read the Privacy Policy of QuizMaster. Learn how we collect, use and protect information while you use our educational quiz platform."
        />
      </Helmet>

      <div className="privacy-page">
        <div className="privacy-container">

          <h1>Privacy Policy</h1>

          <p className="privacy-date">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2>1. Introduction</h2>

            <p>
              Welcome to QuizMaster. Your privacy is important to us.
              This Privacy Policy explains how information may be
              collected, used, stored, and protected when you use our
              website and educational quiz services.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>

            <p>
              QuizMaster may collect or store information that you
              provide while using certain features of the website.
              This may include information such as your username,
              quiz scores, leaderboard records, quiz history, and
              other information required to provide website features.
            </p>

            <p>
              Some quiz-related information may be stored locally in
              your browser using technologies such as Local Storage.
            </p>
          </section>

          <section>
            <h2>3. How We Use Information</h2>

            <p>
              Information may be used to provide and improve quiz
              functionality, display quiz results, maintain learning
              progress, provide leaderboard features, improve the user
              experience, and maintain the security and performance
              of the website.
            </p>
          </section>

          <section>
            <h2>4. Cookies and Similar Technologies</h2>

            <p>
              QuizMaster may use cookies, Local Storage, and similar
              technologies to remember preferences, support website
              functionality, understand website usage, and improve
              the user experience.
            </p>
          </section>

          <section>
            <h2>5. Google AdSense and Advertising</h2>

            <p>
              QuizMaster may use Google AdSense or other third-party
              advertising services to display advertisements on the
              website.
            </p>

            <p>
              Google and its advertising partners may use cookies or
              similar technologies to serve and measure advertisements,
              including advertisements that may be based on a user's
              visits to this website or other websites.
            </p>

            <p>
              Users may be able to manage or personalize their
              advertising preferences through Google's advertising
              settings and other available privacy controls.
            </p>

            <p>
              Third-party advertising providers may have their own
              privacy policies and practices regarding the information
              they collect and use.
            </p>
          </section>

          <section>
            <h2>6. Third-Party Services</h2>

            <p>
              QuizMaster may use third-party services to support
              website functionality, analytics, hosting, advertising,
              authentication, or other technical services.
              These third-party services may process information
              according to their own privacy policies.
            </p>
          </section>

          <section>
            <h2>7. Data Security</h2>

            <p>
              We take reasonable measures to protect information
              associated with QuizMaster. However, no website,
              application, or online transmission can be guaranteed
              to be completely secure.
            </p>
          </section>

          <section>
            <h2>8. Children's Privacy</h2>

            <p>
              QuizMaster is an educational platform intended for
              general learning and quiz practice. We do not knowingly
              request unnecessary personal information from children.
              If you believe that a child has provided personal
              information to us, please contact us so that appropriate
              action can be taken.
            </p>
          </section>

          <section>
            <h2>9. External Links</h2>

            <p>
              QuizMaster may contain links to external websites or
              services. We are not responsible for the privacy
              practices, content, or security of third-party websites.
              We recommend reviewing the privacy policies of external
              websites before providing them with personal information.
            </p>
          </section>

          <section>
            <h2>10. Your Choices</h2>

            <p>
              Depending on the features you use, you may be able to
              manage certain information through your browser settings,
              clear locally stored website data, or manage advertising
              and cookie preferences through available browser and
              third-party controls.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time to
              reflect changes to our website, services, technologies,
              or applicable requirements. Any updates will be posted
              on this page with a revised "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>12. Contact Us</h2>

            <p>
              If you have questions or concerns regarding this Privacy
              Policy, please contact us through the Contact page of
              QuizMaster.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

export default Privacy;