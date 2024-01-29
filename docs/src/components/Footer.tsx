import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full p-5 flex flex-col justify-start border text-gray-500 border-gray-200">
      <span className="text-sm">
        Built by <span className="font-medium">Ferhat ALTUNDAL</span>. The
        source code is available on{" "}
        <Link
          className="font-medium underline"
          target="_blank"
          to="https://github.com/ferhataltundal/calculation-toolkit.git"
        >
          Github
        </Link>
        .
      </span>
    </footer>
  );
};
export default Footer;
