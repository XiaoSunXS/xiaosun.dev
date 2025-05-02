import { Sectionkey } from "../utils/types";

const SECTIONS = new Map<Sectionkey, string>([
  ["about", "About"],
  ["experience", "Experience"],
]);

export const Header = () => (
  <nav
    className="fixed top-0 left-0 w-full"
    style={{ backgroundColor: "var(--light-peach)" }}
  >
    <div className="flex space-x-4 p-4 pl-40">
      {[...SECTIONS.keys()].map((key, index) => (
        <a
          href={`#${key}`}
          className="hover:underline"
          key={`nav-section-${index}`}
        >
          {SECTIONS.get(key)}
        </a>
      ))}
    </div>
    <hr className="border-t mx-6" />
  </nav>
);
