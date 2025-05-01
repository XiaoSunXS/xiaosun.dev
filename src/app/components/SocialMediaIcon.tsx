import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SocialMediaKey } from "../utils/types";

export const SocialMediaIcon = (type: SocialMediaKey) => {
  switch (type.toLowerCase()) {
    case "github":
      return <FaGithub className="mr-2" />;
    case "linkedin":
      return <FaLinkedin className="mr-2" />;
    case "twitter":
      return <FaTwitter className="mr-2" />;
    case "email":
      return <FaEnvelope className="mr-2" />;
    default:
      return null;
  }
};
