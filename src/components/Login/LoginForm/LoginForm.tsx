import SocialButtonProps from "./FormSocialButton";

import googleLogo from "../../../assets/googleLogo.png";
import facebookLogo from "../../../assets/Facebook_f_logo_(2019).png";
import appleLogo from "../../../assets/appleLogo.png";
import InputForm from "./InputForm";
import ToggleInput from "./ToogleInput/ToggleInput";

export default function LoginForm() {
  return (
    <div className="p-5 flex items-center justify-center">
      <form
        action=""
        className=" bg-fullblack w-4/12  p-10 mt-2 flex flex-col items-center rounded-lg "
      >
        <h1 className="font-bold text-h1 mt-8 text-white">Entrar no Spotify</h1>
        <div className="flex flex-col m-10 gap-3 text-gray-200">
          <SocialButtonProps name="Continuar com O Google" img={googleLogo} />
          <SocialButtonProps
            name="Continuar com O Facebook"
            img={facebookLogo}
          />
          <SocialButtonProps name="Continuar com A Apple" img={appleLogo} />
          <SocialButtonProps name="Continuar com um número de Telefone" />
        </div>
        <div className="flex flex-col items-center p-4 border-y-1 border-gray-800  w-3/4 ">
          <div className="flex flex-col w-10/12 text-black justify-evenly  items-center h-60 pt-4">
            <InputForm
              value="E-mail ou nome de usuário"
              type="text"
              id="email"
            />
            <InputForm value="Senha" type="password" id="password" />
            <ToggleInput />
          </div>
          <button className="w-80 h-12 bg-green rounded-full mt-7">
            Entrar
          </button>
          <p className="text-white text-center underline mt-8 cursor-pointer hover:text-green">
            Esqueceu sua senha?
          </p>
        </div>

        <p className="text-gray-400 mt-10">
          Não tem uma conta?{" "}
          <a className="text-white">Inscrever-se no Spotify</a>
        </p>
      </form>
    </div>
  );
}
