import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Briefcase, Home, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation(); // Hook do react-router-dom para obter a URL atual
  const [activeTab, setActiveTab] = useState<string>("");

  // Atualiza o estado da aba ativa sempre que a URL muda
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("home");
    } else if (location.pathname === "/works") {
      setActiveTab("works");
    } else if (location.pathname === "/about") {
      setActiveTab("about");
    }
  }, [location.pathname]);

  return (
    <nav className="pt-4">
      <ul className="flex gap-4">
        <NavLink to="/">
          <TooltipProvider delayDuration={1}>
            <Tooltip>
              <TooltipTrigger>
                <li
                  className={`p-3 rounded ${
                    activeTab === "home"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <Home />
                </li>
              </TooltipTrigger>
              <TooltipContent>
                <p>home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavLink>

        <NavLink to="/works">
          <TooltipProvider delayDuration={1}>
            <Tooltip>
              <TooltipTrigger>
                <li
                  className={`p-3 rounded ${
                    activeTab === "works"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <Briefcase />
                </li>
              </TooltipTrigger>
              <TooltipContent>
                <p>works</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavLink>

        <NavLink to="/about">
          <TooltipProvider delayDuration={1}>
            <Tooltip>
              <TooltipTrigger>
                <li
                  className={`p-3 rounded ${
                    activeTab === "about"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <User />
                </li>
              </TooltipTrigger>
              <TooltipContent>
                <p>about me</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavLink>
      </ul>
    </nav>
  );
}
