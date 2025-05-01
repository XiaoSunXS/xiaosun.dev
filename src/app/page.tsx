import { IntroAboutMe } from "./components/IntroAboutMe";
import { SocialMedia } from "./components/SocialMedia";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/3">
          <IntroAboutMe />
        </div>
        <div className="w-full md:w-1/3 flex justify-end">
          <SocialMedia />
        </div>
      </div>
    </>
  );
}
