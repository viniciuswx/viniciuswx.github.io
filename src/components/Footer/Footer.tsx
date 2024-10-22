import { Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <nav className="pb-4">
      <ul className="flex gap-4">
        <a href="https://www.instagram.com/viniciusw._/" target="_blank">
          <li className="p-3 border border-black rounded hover:bg-black hover:text-white transition-all">
            <Instagram />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/vinicius-graciano-5081501a1/" target="_blank">
          <li className="p-3 border border-black rounded hover:bg-black hover:text-white transition-all">
            <Linkedin />
          </li>
        </a>
        <a href="https://github.com/viniciuswx" target="_blank">
          <li className="p-3 border border-black rounded hover:bg-black hover:text-white transition-all">
            <Github />
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Footer;
