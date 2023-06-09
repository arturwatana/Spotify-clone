import Footer from "../components/Footer/Footer";
import Menu from "../components/Home/Menu/Menu";
import NavBar from "../components/Home/NavBar/NavBar";
import PlayListMenu from "../components/Home/PlayListMenu/PlayListMenu";

export default function Home() {
  return (
    <>
      <NavBar />
      <Menu />
      <PlayListMenu />
      <Footer />
    </>
  );
}
