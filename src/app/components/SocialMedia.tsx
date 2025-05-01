import { capitalize } from "../utils/helpers";
import { SocialMediaKey } from "../utils/types";
import { SocialMediaIcon } from "./SocialMediaIcon";

const SOCIAL_MEDIA = new Map<SocialMediaKey, string>([
  ["gitHub", "https://github.com/XiaoSunXS"],
  ["linkedIn", "https://www.linkedin.com/in/xiao-s-a54554147/"],
]);

export const SocialMedia = () => (
  <>
    <ul>
      {[...SOCIAL_MEDIA.keys()].map((key) => (
        <li key={key}>
          <a
            href={SOCIAL_MEDIA.get(key)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-secondary-brown transition-colors"
          >
            {SocialMediaIcon(key)}
            <span>{capitalize(key)}</span>
          </a>
        </li>
      ))}
    </ul>
  </>
);
