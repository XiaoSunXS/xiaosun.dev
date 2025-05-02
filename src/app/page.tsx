import { IntroAboutMe } from "./components/IntroAboutMe";
import { JobExperiences } from "./components/JobExperiences";
import { SocialMedia } from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="space-y-8 w-full md:w-2/3">
      <h2>Hello, I&apos;m Xiao</h2>
      <div className="space-y-4">
        <IntroAboutMe />
        <SocialMedia />
      </div>
      <div>
        <JobExperiences />
      </div>
    </div>
  );
}
