import { FaStar } from 'react-icons/fa';
import type { ITechnology } from '../Types/type';
import { toast } from 'react-toastify';
import { FiCheck } from 'react-icons/fi';

export interface TechnologyCardProps {
  technologi: ITechnology;
  selectedTechnologies: ITechnology[];
  onAdd: (technology: ITechnology) => void;
}

export default function TechnologyCard({
  technologi,
  onAdd,
  selectedTechnologies,
}: TechnologyCardProps) {
  // const [isSelected, setIsSelected] = useState(false);

  const isSelected = selectedTechnologies.some(
    (technology: ITechnology) => technology.id === technologi.id,
  );

  const handleSelectBtn = () => {
    // setIsSelected(true);
    toast.success(`${technologi.name} added to stack`);
    onAdd(technologi);
  };
  return (
    <div className="w-full max-w-xs rounded-2xl border border-gray-200 bg-white p-6 shadow-sm text-left">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <img
            src={technologi.icon}
            alt={`${technologi.name} icon`}
            className="h-6 w-6"
          />
        </div>

        <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {technologi.badge}
        </span>
      </div>

      <h3 className="mb-1.5 text-lg font-medium text-gray-900">
        {technologi.name}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-gray-500">
        {technologi.description}
      </p>

      <div className="mb-5 flex items-center gap-3">
        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
          {technologi.category}
        </span>
        <span className="text-xs text-gray-500">{technologi.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-xs text-gray-600">
          <span>
            <FaStar className="text-yellow-400" />
          </span>
          {technologi.rating}
        </span>
      </div>

      <button
        onClick={() => handleSelectBtn()}
        disabled={isSelected}
        className={`w-full rounded-full py-3 text-sm  transition-transform active:scale-[0.98]  ${isSelected ? `text-red-500 cursor-not-allowed bg-none border font-bold border-red-500 ` : 'text-white cursor-pointer  bg-gray-900 font-medium '}`}
      >
        {isSelected ? (
          <span className="flex items-center justify-center gap-1">
            <FiCheck className="text-2xl" /> Added to Stack
          </span>
        ) : (
          'Add to stack'
        )}
      </button>
    </div>
  );
}
