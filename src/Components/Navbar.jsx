import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="container bg-amber-200 py-5 flex items-center justify-between px-5">
        <p>Latihan</p>
        <ul className="flex items-center justify-evenly gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color-generator">Color Generator</Link>{" "}
          </li>
        </ul>
      </nav>
    </>
  );
}
