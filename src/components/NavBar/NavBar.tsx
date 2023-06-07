import { IoIosArrowUp } from "react-icons/io";

export default function NavBar() {
  return (
    <header className="h-16 fixed w-full flex justify-end  bg-gray-950">
      <nav className="w-90.9% flex justify-between  text-white">
        <div className="flex justify-center items-center gap-4 h-full ml-8 text-2xl">
          <IoIosArrowUp className="rotate-270 " />
          <IoIosArrowUp className="rotate-90 " />
        </div>
        <div className="flex justify-end gap-6  w-80 mr-4">
          <button className="text-gray-500 font-bold hover:text-gray-200 hover:scale-105">
            Inscrever-se
          </button>
          <button className="bg-white text-black font-bold h-3/4 rounded-full w-28 m-2">
            Entrar
          </button>
        </div>
      </nav>
    </header>
  );
}
