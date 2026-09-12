import type { Dispatch, SetStateAction } from 'react';
import type { ITechnology } from '../Types/type';
import SelectedTechnologyCard from './SelectedTechnologyCard';
import { toast } from 'react-toastify';

export interface SelectedTechnologyProps {
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

export default function SelectedTechnology({
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologyProps) {
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.info('stack cleared');
  };

  return (
    <>
      {/* Selected Technology Section. */}
      
      <div className="border border-gray-200 rounded-xl w-70 p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">Your Stack</h2>

        {/* Changing message on selection */}
        {selectedTechnologies.length === 0 ? (
          <p className="text-sm text-[#94A3B8]">
            No technologies selected yet.
          </p>
        ) : (
          <p className="text-sm text-[#94A3B8]">
            {selectedTechnologies.length} technolog
            {selectedTechnologies.length > 1 ? 'ies' : 'y'} selected.
          </p>
        )}

        {/* update selected stack over selection */}

        {selectedTechnologies.length === 0 ? (
          <div className="border border-dashed border-gray-200 rounded-lg flex items-center justify-center p-4">
            <span className="text-gray-400 text-sm">Your stack is empty.</span>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {selectedTechnologies.map((technology: ITechnology) => (
              <SelectedTechnologyCard
                technology={technology}
                key={technology.id}
                selectedTechnologies={selectedTechnologies}
                setSelectedTechnologies={setSelectedTechnologies}
              />
            ))}
          </div>
        )}
        {selectedTechnologies.length === 0 ? (
          ''
        ) : (
          <div className="w-full mt-4">
            <button
              onClick={() => handleRemoveAll()}
              className="btn btn-outline btn-secondary w-full"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </>
  );
}
