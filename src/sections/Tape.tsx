import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scaleable",
  "User Friendly",
  "Maintainable",
  "Search Optimization",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className=" py-8 | lg:py-16">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-2 | lg:-rotate-1 ">
        <div className="flex">
          <div className="flex flex-none gap-4 py-4">
            {words.map((word) => (
              <div
                key={word}
                className=" inline-flex gap-4 items-center text-gray-900"
              >
                <span className="uppercase font-extrabold text-sm">{word}</span>{" "}
                <StarIcon className="size-6 -rotate-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
