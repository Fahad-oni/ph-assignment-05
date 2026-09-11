import { use } from "react"
import type { ITechnology } from "../Types/type"
import TechnologyCard from "./TechnologyCard";

export interface TechnologyProps {
  technologyPromise:Promise<ITechnology[]>
}

export default function Technology({  technologyPromise }: TechnologyProps) {
  
  const technologies = use(technologyPromise);

  
  return (
    <div className="px-4 md:px-12 text-center sm:text-left container mx-auto">
      <h2 className="text-3xl font-bold ">
        Explore the
        <span className="bg-linear-to-r from-[#FF5722] to-[#D81B7E] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-md text-[#64748B] mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col justify-center items-center md:flex gap-8 mt-12 md:items-start">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {technologies.map((technologi, ind: number) => (
            <TechnologyCard technologi={technologi} key={ind} />
          ))}
        </div>
        <div className="border border-gray-200 rounded-xl w-70 p-4 flex flex-col gap-2">
          <h2 className="text-xl font-bold">Your Stack</h2>
          <p className="text-sm text-[#94A3B8]">
            No technologies selected yet.
          </p>
          <div className="border border-dashed border-gray-200 rounded-lg flex items-center justify-center p-4">
          <span className="text-gray-400 text-sm">Your stack is empty.</span>
          </div>
        </div>
      </div>
    </div>
  );
}