import Quiz from "../components/CardQuiz";
// import ProgressBar from "../components/ProgressBar";
import "./PageQuiz.css";

// Page principale du quiz intégrant les deux composants ci-dessus
export default function PageQuiz() {
  return (
    <div className="card-container ">
      <h1 className="text-center mt-5">Quiz</h1>
      {/* <ProgressBar /> */}
      <Quiz />
    </div>
  );
}
