import ArrowTopRight from "@/assets/icons/arrow-up-right.svg";
const contactLinks = [
  { title: "Linkdln", link: "#" },
  { title: "Twitter", link: "#" },
  { title: "Instagram", link: "#" },
  { title: "Facebook", link: "#" },
];
export const Footer = () => (
  <div className="container">
    <div className="py-8 border-t-2 border-white/20 ">
      <div className="flex flex-col items-center gap-8">
        <p className="text-white/40 text-sm tracking-wider">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <nav className="flex flex-col items-center gap-6 text-sm text-gray-100  ">
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
);
