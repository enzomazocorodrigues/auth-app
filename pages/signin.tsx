import { KeyIcon } from "@heroicons/react/24/solid";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { PageIcon } from "../components/PageIcon";

export default function SignIn() {
  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center p-10">
      <div className="w-[426px] bg-white drop-shadow-sm rounded-md p-6 flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <PageIcon>
            <KeyIcon width={28} height={28} />
          </PageIcon>
          <h1 className="text-2xl text-slate-700 font-bold">Sign in</h1>
        </div>
        <h2 className="text-xs font-medium text-slate-400">
          Cras sed felis eget velit aliquet sagittis id consectetur purus ut
          faucibus pulvinar.
        </h2>
        <hr className="w-full" />
        <Input label="Email" id="email" type="email" />
        <Input label="Password" id="password" type="password" />
        <Button asChild>
          <a href="/">Sign in</a>
        </Button>
        <hr className="w-full" />
        <span className="text-center text-sm text-slate-600 font-medium">
          Don’t have an account?
          <a
            className="ml-1 text-blue-500 outline-none focus:ring-2 rounded-sm hover:text-blue-400"
            href="/signup"
          >
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
}