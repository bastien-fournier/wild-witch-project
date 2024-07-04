import BasicExample from "../components/CardQuizz";
// import ProgressBar from "../components/ProgressBar";
import "./PageQuiz.css"

// Page principale du quiz intégrant les deux composants ci-dessus
export default function PageQuiz() {
  return (
    <div className="card-container">
      <h1>Quizz</h1>
      {/* <ProgressBar /> */}
      <BasicExample />
    </div>
  );
}
