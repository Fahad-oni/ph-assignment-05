import { RxCross2 } from 'react-icons/rx';
import type { ITechnology } from '../Types/type';
import type { Dispatch, SetStateAction } from 'react';

export interface SelectedTechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>
}

export default function SelectedTechnologyCard({
  technology,selectedTechnologies,setSelectedTechnologies
}: SelectedTechnologyCardProps) {

  const handleDeleteBtn = () => {
    const restTechnologise = selectedTechnologies.filter((tech: ITechnology) => tech.name != technology.name)
    
    setSelectedTechnologies(restTechnologise);
  }

  return (
    <div className="border border-gray-300 rounded-md py-3 px-3">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          <img src={technology.icon} alt="" className="w-10 h-10" />
          <div>
            <h2 className="text-[0.9rem] font-bold">{technology.name}</h2>
            <p className="text-[0.8rem] font-semibold text-[#94A3B8]">
              {technology.category}
            </p>
          </div>
        </div>
        <RxCross2
          onClick={() => handleDeleteBtn()}
          className="text-2xl text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
}
