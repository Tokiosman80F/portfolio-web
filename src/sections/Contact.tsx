import Card from "@/components/Card";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg"

export const ContactSection = () => {
  return <div className="py-8 | md:py-28">
    <div className="container">
      <Card className="bg-gradient-to-r to-sky-300 from-emerald-400  outline-0">
        <div className=" flex items-center gap-8 | sm:flex-col sm:justify-center | md:flex-row md:justify-around  ">
          <div>
          <h1 className="font-serif text-2xl text-gray-950 ">Let's create something amazing together </h1>
          <p className="text-sm max-w-lg mt-2 text-gray-800" >Ready to bring your next project to life ? Lets connect and discuss how I can help you achieve your your</p>        
          </div>
         <a href=""> <button className="inline-flex items-center gap-2 w-max px-6 py-3 rounded-xl font-semibold  bg-gray-900 text-white" ><span className="text-sm">Contact Me</span> <ArrowUpRight className="size-4" /> </button></a>
        </div>
      </Card>
    </div>
  </div>;
};
