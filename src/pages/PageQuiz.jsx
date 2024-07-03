import BasicExample from "../components/CardQuizz";
import ProgressBar from "../components/ProgressBar";

// Page principale du quiz intégrant les deux composants ci-dessus
export default function PageQuiz() {
  return (
    <div>
      <h1>Quizz</h1>
      <ProgressBar />
      <BasicExample />
    </div>
  );
}
