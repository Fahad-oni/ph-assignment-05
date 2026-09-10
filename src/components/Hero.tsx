import Hero_IMG from '../assets/banner-stack.png'
const Hero = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row md:justify-between items-center py-4 px-4 md:px-12 container mx-auto">
      <div className="space-y-8 text-center md:text-left md:max-w-[40%] place-content-start">
        <h2 className="text-4xl md:text-5xl font-bold ">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className="text-[#475569] text-md">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-2 justify-center md:place-content-start w-full ">
          <button className="bg-linear-to-r from-[#FF5722] to-[#D81B7E] py-2 px-4 rounded-md font-semibold text-[0.9rem] text-white hover:shadow-2xl cursor-pointer w-[50%]">
            Explore Technologies
          </button>
          <button className="py-2 rounded border border-gray-500  text-[0.9rem] text-[#374151] cursor-pointer w-[40%]">
            
            Learn More
          </button>
        </div>
      </div>
      <div className="">
        <img src={Hero_IMG} alt="" className='w-125 ' />
      </div>
    </div>
  );
};

export default Hero;