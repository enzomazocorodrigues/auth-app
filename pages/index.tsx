import { KeyIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center">
      <div className="w-[426px] bg-white drop-shadow-sm rounded-md p-6 flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center">
            <KeyIcon className="text-green-500" width={28} height={28} />
          </div>
          <h1 className="text-2xl text-slate-700 font-bold">Sign in</h1>
        </div>
        <h2 className="text-xs font-medium text-slate-400">
          Cras sed felis eget velit aliquet sagittis id consectetur purus ut
          faucibus pulvinar.
        </h2>
        <hr className="w-full" />
        <div>
          <label className="text-sm text-slate-600 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full rounded-md outline-none border border-gray-200 py-2 px-3 text-slate-700"
            type="email"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600 font-medium" htmlFor="email">
            Password
          </label>
          <input
            className="w-full rounded-md outline-none border border-gray-200 py-2 px-3 text-slate-700"
            type="password"
          />
        </div>
        <button className="w-full bg-green-400 p-3 rounded-md text-base font-medium text-white">
          Sign in
        </button>
        <hr className="w-full" />
        <span className="text-center text-sm text-slate-600 font-medium">
          Don’t have an account?
          <a className="ml-1 text-blue-500" href="/">
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
}
