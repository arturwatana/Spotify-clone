import spotify from "../../../assets/Spotify_Logo_RGB_White.png";

export default function LoginNavBar() {
  return (
    <nav className="bg-fullblack h-24 flex items-center pl-12 pt-1">
      <img src={spotify} className="h-9" />
    </nav>
  );
}
