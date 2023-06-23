import Link from "next/link";

export default function FormLogin() {
  return (
    <form
      action=""
      className="flex flex-col border-2 border-black rounded-xl w-1/5 h-full gap-8 p-16 justify-between items-center"
    >
      <h1 className="font-bold text-5xl text-white">WebChat</h1>
      <h2 className="font-light text-3xl text-white">Seja bem vindo</h2>
      <div className="flex flex-col text-white justify-center gap-5 items-center ">
        <div className="flex flex-col items-center gap-4">
          <label htmlFor="username" className="text-lg font-light">
            Digite seu usuario
          </label>
          <input
            type="text"
            id="username"
            className="rounded-full p-1 text-black text-center"
          />
        </div>
        <Link
          className="bg-actionBtn rounded-full w-4/5 p-1 text-center"
          href="/chat"
        >
          <button type="button">Entrar</button>
        </Link>
      </div>
    </form>
  );
}
