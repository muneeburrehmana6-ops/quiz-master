import { Helmet } from "react-helmet-async";

function Disclaimer() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | QuizMaster</title>

        <meta
          name="description"
          content="Read the QuizMaster Disclaimer. Learn about the educational purpose, content accuracy, external links, and limitations of information provided on QuizMaster."
        />

        <meta
          name="author"
          content="QuizMaster"
        />
      </Helmet>

      <div
        style={{
          minHeight: "100vh",
          background: "#f5f7fb",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#ffffff",
            padding: "45px",
            borderRadius: "16px",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
            lineHeight: "1.8",
          }}
        >
          <h1
            style={{
              color: "#1e3a8a",
              marginBottom: "10px",
            }}
          >
            Disclaimer
          </h1>

          <p style={{ color: "#64748b" }}>
            Last updated: August 2026
          </p>

          <h2>1. Educational Purpose</h2>

          <p>
            QuizMaster is an educational quiz platform created to
            help learners practice and improve their knowledge
            through interactive quizzes.
          </p>

          <h2>2. Content Accuracy</h2>

          <p>
            We make reasonable efforts to provide accurate and useful
            questions, answers, and explanations. However, QuizMaster
            does not guarantee that all information will always be
            complete, current, or completely free from errors.
          </p>

          <h2>3. Learning Resource</h2>

          <p>
            The content provided on QuizMaster is intended for general
            educational and informational purposes. It should not be
            considered a substitute for professional advice,
            specialized instruction, or authoritative educational
            resources.
          </p>

          <p>
            Users should consult additional reliable learning
            resources when deeper or specialized knowledge is
            required.
          </p>

          <h2>4. Quiz Results</h2>

          <p>
            Quiz scores, results, certificates, and leaderboard
            information are provided for learning and practice
            purposes. QuizMaster does not guarantee that results will
            always be completely accurate, permanent, or available.
          </p>

          <h2>5. External Links</h2>

          <p>
            QuizMaster may contain links to external websites or
            resources. We are not responsible for the content,
            privacy practices, security, or availability of
            third-party websites.
          </p>

          <h2>6. Changes to This Disclaimer</h2>

          <p>
            We may update this Disclaimer when necessary to reflect
            changes to our website, services, or policies. Any
            changes will be published on this page.
          </p>

          <h2>7. Contact Us</h2>

          <p>
            If you have questions about this Disclaimer, please
            contact us through the Contact page.
          </p>
        </div>
      </div>
    </>
  );
}

export default Disclaimer;