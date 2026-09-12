import { RxCross2 } from 'react-icons/rx';
import type { ITechnology } from '../Types/type';

export interface SelectedTechnologyCardProps {
  technology: ITechnology;
}

export default function SelectedTechnologyCard({
  technology,
}: SelectedTechnologyCardProps) {
  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-md py-3 px-3">
      <div className="flex gap-2">
        <img src={technology.icon} alt="" className="w-10 h-10" />
        <div>
          <h2 className="text-[0.9rem] font-bold">{technology.name}</h2>
          <p className="text-[0.8rem] font-semibold text-[#94A3B8]">{technology.category}</p>
        </div>
      </div>
      <RxCross2 className='text-2xl text-red-500' />
    </div>
  );
}
