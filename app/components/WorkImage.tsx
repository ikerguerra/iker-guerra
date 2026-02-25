import { useState } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { trackProjectEvent } from "../utils/gtag";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  project: {
    id: number;
    name: string;
    category: string;
    link: string;
  };
  position: number;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`/videos/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const handleImageClick = () => {
    trackProjectEvent("click_image", props.project, props.position);
  };

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        onClick={handleImageClick}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <Image
          src={props.image}
          alt={props.alt ?? ""}
          width={800}
          height={450}
          sizes="(max-width: 900px) 80vw, (max-width: 1600px) 420px, 500px"
          quality={85}
          style={{ maxWidth: "100%", maxHeight: "350px", height: "auto" }}
        />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
