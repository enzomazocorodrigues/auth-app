import { CheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Button } from "../components/Button";
import { PageIcon } from "../components/PageIcon";

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-100 flex justify-center items-center p-10">
      <div className="w-[426px] bg-white drop-shadow-sm rounded-md p-6 flex flex-col gap-6 items-center">
        <PageIcon large>
          <CheckIcon width={56} height={56} />
        </PageIcon>
        <h1 className="text-2xl text-slate-700 font-bold w-3/4 text-center">
          Congratulations Enzo, you’re in! 🎉
        </h1>
        <h2 className="text-xs font-medium text-slate-400">
          Cras sed felis eget velit aliquet sagittis id consectetur purus ut
          faucibus pulvinar.
        </h2>
        <Button asChild>
          <Link href="/signin">Log out</Link>
        </Button>
      </div>
    </div>
  );
}
