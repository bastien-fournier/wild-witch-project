import ProgressBar from "react-bootstrap/ProgressBar";

export default function AnimatedExample() {
  return (
    <>
      <div className="d-flex justify-content-center my-4">
        <ProgressBar animated now={45} style={{ width: "48%" }} />
      </div>
    </>
  );
}
