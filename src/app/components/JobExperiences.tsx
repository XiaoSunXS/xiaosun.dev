"use client";

import { JOB_EXPERIENCES } from "../contents/jobExperience";
import { formatYearMonth } from "../utils/helpers";
import { CollapsableList } from "./CollapsableList";
import { LuExternalLink } from "react-icons/lu";

const CompanyLink = ({ url }: { url: string }) => (
  <a
    href={url}
    target="_blank"
    className="underline hover:cursor-pointer flex items-center gap-1"
  >
    <LuExternalLink /> {url}
  </a>
);

export const JobExperiences = () => (
  <div className="space-y-4">
    <h3>Work Experience</h3>
    {JOB_EXPERIENCES.map((jobExperienceItem) => (
      <div key={`job-at-${jobExperienceItem.company}`}>
        <h4>{jobExperienceItem.company}</h4>
        {jobExperienceItem.companyUrl && (
          <CompanyLink url={jobExperienceItem.companyUrl} />
        )}
        <p>{jobExperienceItem.title}</p>
        <p>
          {formatYearMonth(jobExperienceItem.dates.start)} -{" "}
          {jobExperienceItem.dates.end
            ? formatYearMonth(jobExperienceItem.dates.end)
            : "Present"}
        </p>
        <CollapsableList
          items={jobExperienceItem.tasks}
          label="details"
          showOnDefault={2}
        />
      </div>
    ))}
  </div>
);
