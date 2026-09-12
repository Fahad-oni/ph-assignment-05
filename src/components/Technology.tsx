import { use, useState } from 'react';
import type { ITechnology } from '../Types/type';
import TechnologyCard from './TechnologyCard';
import SelectedTechnology from './SelectedTechnology';

export interface TechnologyProps {
  technologyPromise: Promise<ITechnology[]>;
}

export default function Technology({ technologyPromise }: TechnologyProps) {
  const technologies = use(technologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  const handleTechnology = (technology: ITechnology) => {
    setSelectedTechnologies([...selectedTechnologies, technology]);
  };

  return (
    // explore technology section..

    <div
      id="technologies"
      className="px-4 md:px-12  text-center sm:text-left container mx-auto"
    >
      <h2 className="text-3xl font-bold ">
        Explore the{' '}
        <span className="bg-theme-gradient bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-md text-[#64748B] mt-2">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex flex-col justify-center items-center md:flex md:flex-row gap-8 mt-12 md:items-start">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* technology card section  */}

          {technologies.map(technologi => (
            <TechnologyCard
              technologi={technologi}
              key={technologi.id}
              onAdd={handleTechnology}
              selectedTechnologies={selectedTechnologies}
            />
          ))}
        </div>

        {/* selected technoloy section */}

        <SelectedTechnology
          selectedTechnologies={selectedTechnologies}
          setSelectedTechnologies={setSelectedTechnologies}
        />
      </div>
    </div>
  );
}
