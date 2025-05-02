import { IntroAboutMe } from "./components/IntroAboutMe";
import { JobExperiences } from "./components/JobExperiences";
import { Projects } from "./components/Projects";
import { SocialMedia } from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="w-full md:w-2/3">
      <section id="about" className="pt-20">
        <h2>Hello, I&apos;m Xiao</h2>
        <div className="space-y-4">
          <IntroAboutMe />
          <SocialMedia />
        </div>
      </section>
      <section id="experience" className="pt-20">
        <JobExperiences />
      </section>
      <section id="projects" className="pt-20">
        <Projects />
      </section>
    </div>
  );
}
