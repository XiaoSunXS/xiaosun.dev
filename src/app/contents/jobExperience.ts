import { JobExperience } from "../utils/types";

export const JOB_EXPERIENCES: JobExperience[] = [
  {
    title: "Software Engineer",
    company: "CodeExpert (ETH Zurich)",
    companyUrl: "https://expert.ethz.ch",
    dates: {
      start: { year: 2024, month: 9 },
    },
    tasks: [
      "Played a key role in migrating from Meteor to an RPC-based architecture with  functional programming",
      "Diagnosed and resolved critical production issues, improving system stability for ~10,000 student users",
      "Managed and upgraded core dependencies including React, migrated testing framework from Jest to Vitest",
      "Established and refined agile development processes, improving team efficiency and delivery cadence",
    ],
  },
  {
    title: "Software Engineer",
    company: "Ledgy",
    companyUrl: "https://app.ledgy.com",
    dates: {
      start: { year: 2020, month: 11 },
      end: { year: 2024, month: 8 },
    },
    tasks: [
      "Led a team of 2–4 engineers to build a suite of in-app financing reports targeting the new enterprise market segment",
      "Improved app performance by ~50% for large client datasets by profiling with dev tools, reducing algorithm complexity, eliminating unnecessary renders, and introducing Web Workers",
      "Drove completion and rollout of internal access control features for SOC 2 compliance by enhancing role configurations and migrating ~15 internal roles to eliminate shared accounts and enable user-level tracking",
      "Led pricing revamp and Stripe integration, contributing to new revenue streams and owning the ongoing maintenance of in-app Stripe APIs",
      "Collaborated closely with PMs, product experts, and designers in strategic planning and product decision-making",
      "Mentored and onboarded 2 trainees into junior developers over 6 months through regular check-ins, pair programming, career guidance, and code reviews",
      "Maintained and upgraded npm packages, resolved vulnerabilities and incidents, and supported the team with MongoDB queries as part of the on-call group",
      "Wrote unit and integration tests with Jest to ensure code quality, and maintained internal documentation",
      "Main contributor to the landing page revamp using Gatsby and Contentful",
    ],
  },
];
