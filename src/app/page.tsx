import { IntroAboutMe } from "./components/IntroAboutMe";
import { SocialMedia } from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="space-y-8">
      <h2>Hello, I&apos;m Xiao</h2>
      <div className="w-full md:w-2/3 space-y-4">
        <IntroAboutMe />
        <SocialMedia />
      </div>
    </div>
  );
}
