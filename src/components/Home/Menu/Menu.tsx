import spotify from "../../../assets/Spotify_Logo_RGB_White.png";
import { IoHomeOutline } from "react-icons/io5";

import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

export default function Menu() {
  return (
    <aside className="bg-black fixed w-57 h-full p-6 ">
      <img src={spotify} className="w-9/12" />
      <div className="flex flex-col gap-5 text-sm mt-8 ">
        <p className="text-gray-400 font-bold hover:text-gray-200 flex items-center gap-3">
          <IoHomeOutline className="text-2xl" /> Início
        </p>
        <p className="text-gray-400 font-bold hover:text-gray-200 flex items-center gap-3">
          <FiSearch className="text-2xl" /> Buscar
        </p>
        <p className="text-gray-400 font-bold hover:text-gray-200 flex items-center gap-3">
          <BiLibrary className="text-2xl" /> Sua Biblioteca
        </p>
      </div>
      <div className="mt-7 flex items-center justify-center text-sm flex-col gap-2 ">
        <p className="text-gray-400 font-bold hover:text-gray-200 flex gap-3 items-center justify-start w-full ">
          <AiFillPlusSquare className="text-3xl text-gray-400 " /> Criar
          playlist
        </p>
        <p className="text-gray-400 font-bold hover:text-gray-200 flex gap-3 w-full items-center justify-start">
          <div className="bg-violet-800 w-6 h-6 flex items-center justify-center">
            <BsHeartFill className="text-sm text-gray-400 " />
          </div>
          Músicas Curtidas
        </p>
      </div>

      <div className="mt-96 h-48 flex flex-col justify-evenly pt-8  ">
        <a href="" className="text-xs text-gray-400 hover:underline ">
          Cookies
        </a>
        <button className="flex bg-black border-gray-600 text-white border-2 rounded-full p-1 justify-center items-center text-sm font-bold hover:scale-105 hover:border-gray-200">
          <TfiWorld className="mr-1" /> Portugues do Brasil
        </button>
      </div>
    </aside>
  );
}
