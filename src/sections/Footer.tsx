import ArrowTopRight from "@/assets/icons/arrow-up-right.svg";
const contactLinks = [
  { title: "Linkdln", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "Instagram", link: "#" },
  { title: "Facebook", link: "#" },
];
export const Footer = () => (
  <footer className="relative overflow-x-clip">
    <div className="-z-10 absolute h-[400px] w-[1600px] bg-emerald-300/40 bottom-0 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"   ></div>
  <div className="container">
    <div className="py-8 border-t-2 border-white/20 ">
      <div className="flex flex-col items-center gap-8 | md:flex-row md:justify-between">
        <p className="text-white/40 text-sm tracking-wider">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <nav className="flex flex-col items-center gap-6 text-sm text-gray-100 | md:flex-row ">
          {contactLinks.map((contact) => (
            <a
              href={contact.link}
              key={contact.title}
              className="inline-flex items-center gap-2"
            >
              <span>{contact.title}</span>
              <ArrowTopRight className="size-4 " />
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
  </footer>
);
