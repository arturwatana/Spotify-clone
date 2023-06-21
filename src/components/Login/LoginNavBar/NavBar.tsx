import spotify from "../../../assets/Spotify_Logo_RGB_White.png";
import { Link } from "react-router-dom";

export default function LoginNavBar() {
  return (
    <nav className="bg-fullblack h-24 flex items-center pl-12 pt-1">
      <Link to="/">
        <img src={spotify} className="h-9" />
      </Link>
    </nav>
  );
}
