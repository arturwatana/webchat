export default function ChatPage() {
  return (
    <div className=" w-full flex gap-5 flex-col ">
      <div className=" h-88vh rounded-xl bg-messagesBg p-8 flex flex-col gap-3">
        <div className="flex flex-col gap-2 items-end w-full ">
          <p className="border-2 border-gray-900 w-fit p-3 rounded-full">
            Ola, sou uma mensagem
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="">Artur:</h1>
          <p className="border-2 border-gray-900 w-fit p-3 rounded-full">
            Ola, sou uma mensagem
          </p>
        </div>
      </div>
      <div className="h-12 flex justify-between ">
        <input type="text" className="w-11/12 h-full rounded-full p-3" />
        <button className="w-7% rounded-full bg-actionBtn text-white">
          Enviar
        </button>
      </div>
    </div>
  );
}
