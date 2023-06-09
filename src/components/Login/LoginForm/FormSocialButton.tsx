type SocialButtonProps = {
  name: string;
  img?: string;
};

export default function SocialButtonProps(props: SocialButtonProps) {
  return (
    <button
      type="button"
      className=" flex justify-evenly
       items-center h-12 rounded-full pr-4 pl-2 border-solid border-1 border-gray-400 hover:border-white"
    >
      <img src={props.img} alt="" className="w-5" />
      <p className="font-bold w-4/5">{props.name}</p>
    </button>
  );
}
