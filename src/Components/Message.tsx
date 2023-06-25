type MessageProps = {
  text: string;
  username: string;
  id: string;
};
export default function Message(props: MessageProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        props.username === "me" ? "items-end" : "items-start"
      } w-full`}
      key={props.id}
    >
      <h1 className="">{props.username}:</h1>
      <p className="border-2 border-gray-900 w-fit p-3 rounded-full">
        {props.text}
      </p>
    </div>
  );
}
