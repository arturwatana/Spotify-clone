type PlayListCardProps = {
  img: string;
  name: string;
  description: string;
};

export default function PlaylistCard(props: PlayListCardProps) {
  return (
    <div className="bg-gray-950 w-48 p-3 rounded-xl">
      <img src={props.img} className="object-contain" alt="" />
      <h1 className="font-bold mt-2">{props.name}</h1>
      <p className="text-sm mt-2 text-gray-400">
        {props.description.length > 44
          ? `${props.description.slice(0, 44)}...`
          : props.description}{" "}
      </p>
    </div>
  );
}
