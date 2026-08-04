import { Helmet } from "react-helmet-async";
import "../styles/Privacy.css";

function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | QuizMaster</title>

        <meta
          name="description"
          content="Read the Privacy Policy of QuizMaster. Learn how we collect, use and protect your personal information."
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
              This Privacy Policy explains how we collect, use and
              protect your information while using our website.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>

            <p>
              We may store your username, quiz scores,
              leaderboard records and quiz history in your browser
              using Local Storage.
            </p>
          </section>

          <section>
            <h2>3. Cookies</h2>

            <p>
              QuizMaster may use cookies or similar technologies
              to improve user experience and website performance.
            </p>
          </section>

          <section>
            <h2>4. Google AdSense</h2>

            <p>
              Google may use cookies to display personalized
              advertisements. You can learn more by visiting
              Google's Privacy Policy.
            </p>
          </section>

          <section>
            <h2>5. Data Security</h2>

            <p>
              We take reasonable measures to protect your data.
              However, no online service is completely secure.
            </p>
          </section>

          <section>
            <h2>6. Contact</h2>

            <p>
              If you have any questions regarding this Privacy
              Policy, please contact us through our Contact page.
            </p>
          </section>

        </div>

      </div>
    </>
  );
}

export default Privacy;