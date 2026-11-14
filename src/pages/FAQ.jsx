import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { faqs } from "../content/faq.js";
import "../styles/Content.css";

const URL = "https://www.quizmasterlearn.com/faq";
const TITLE = "Frequently Asked Questions | QuizMaster Learn";
const DESCRIPTION =
  "Answers to common questions about QuizMaster Learn: how the free quizzes work, how explanations are written, how to report a mistake and how your scores are stored.";

function FAQ() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
      </Helmet>
      <article className="content-page">
        <div className="breadcrumb">
          <Link to="/">Home</Link> › FAQ
        </div>
        <h1>Frequently Asked Questions</h1>
        <p className="lead">
          Everything you may want to know about how QuizMaster Learn works. If your question is not here, please contact us.
        </p>
        {faqs.map((item, i) => (
          <div key={i}>
            <h2>{item.q}</h2>
            <p>{item.a}</p>
          </div>
        ))}
        <div className="cta-row">
          <Link className="btn-primary" to="/categories">Browse all quizzes</Link>
          <Link className="btn-secondary" to="/contact">Contact us</Link>
        </div>
      </article>
    </>
  );
}

export default FAQ;
