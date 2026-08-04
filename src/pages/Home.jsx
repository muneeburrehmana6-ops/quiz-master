import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>QuizMaster | Learn Programming Through Quizzes</title>

        <meta
          name="description"
          content="QuizMaster is an interactive quiz platform where you can practice HTML, CSS, JavaScript, React, C Programming, Data Structures and Algorithms."
        />

        <meta
          name="keywords"
          content="Quiz, HTML Quiz, CSS Quiz, JavaScript Quiz, React Quiz, Programming Quiz, DSA Quiz, C Programming"
        />

        <meta
          name="author"
          content="QuizMaster"
        />

        <meta
          property="og:title"
          content="QuizMaster"
        />

        <meta
          property="og:description"
          content="Practice programming with interactive quizzes."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:site_name"
          content="QuizMaster"
        />
      </Helmet>

      <Hero />
      <Categories />
      <Features />
      <Footer />
    </>
  );
}

export default Home;