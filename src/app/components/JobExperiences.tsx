import { JOB_EXPERIENCES } from "../contents/jobExperience";
import { formatYearMonth } from "../utils/helpers";

export const JobExperiences = () => (
  <div className="space-y-4">
    <h3>Work Experience</h3>
    {JOB_EXPERIENCES.map((jobExperienceItem) => (
      <div key={`job-at-${jobExperienceItem.company}`}>
        <h4>{jobExperienceItem.company}</h4>
        <h5>{jobExperienceItem.title}</h5>
        <p>
          {formatYearMonth(jobExperienceItem.dates.start)} -{" "}
          {jobExperienceItem.dates.end
            ? formatYearMonth(jobExperienceItem.dates.end)
            : "Present"}
        </p>
        <ul className="list-disc ml-5">
          {jobExperienceItem.tasks.map((task, index) => (
            <li key={`job-task-${index}`}>{task}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
