import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Buttons({ text, link }) {
  return (
    <>
      <Link to={link}>
        <Button variant="primary" className="mx-2 my-2">
          {text}
        </Button>
      </Link>
    </>
  );
}
