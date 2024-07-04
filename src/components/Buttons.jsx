import Button from "react-bootstrap/Button";

export default function Buttons({ text }) {
  return (
    <>
      <Button variant="primary" className="mx-2 my-2">
        {text}
      </Button>
    </>
  );
}
