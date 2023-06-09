type InputProps = {
  id: string;
  value: string;
  type: string;
};

export default function InputForm(props: InputProps) {
  return (
    <div className="flex flex-col w-3/4 ">
      <label className="text-white font-bold text-sm " htmlFor={props.id}>
        {props.value}
      </label>
      <input
        className="mt-1 bg-primary border-solid border-1 border-gray-400 h-12 p-2 w-full rounded-md "
        type={props.type}
        placeholder={props.value}
        id={props.id}
      />
    </div>
  );
}
