const SectionHeader = ({
  title,
  heading,
  desc,
}: {
  title: string;
  heading: string;
  desc: string;
}) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-transparent bg-clip-text ">
          {title}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 | md:text-5xl ">
        {heading}
      </h2>
      <p className="text-center text-white/60 my-4 max-w-md mx-auto  | md:text-lg | lg:text-xl  ">
        {desc}
      </p>
    </div>
  );
};

export default SectionHeader;
