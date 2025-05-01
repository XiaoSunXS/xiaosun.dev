import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { SocialMediaKey } from "../utils/types";

export const SocialMediaIcon = (type: SocialMediaKey) => {
  switch (type.toLowerCase()) {
    case "github":
      return <LuGithub className="mr-2" />;
    case "linkedin":
      return <LuLinkedin className="mr-2" />;
    case "email":
      return <LuMail className="mr-2" />;
    default:
      return null;
  }
};
