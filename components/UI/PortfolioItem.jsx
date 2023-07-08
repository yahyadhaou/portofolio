import React, { useState } from "react";
import classes from "../../styles/portfolio-item.module.css";
import Link from "next/link";
import Image from "next/image";
const PortfolioItem = (props) => {
  const { title, media, liveUrl, keyword } = props.item;
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const handleClick = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const currentMedia = media[currentMediaIndex];

  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div
        className={`${classes.portfolio__img}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        {currentMedia.endsWith(".mp4") ? (
          <video
            src={currentMedia}
            width={380}
            height={250}
            controls
            autoPlay
            loop
          />
        ) : (
          <Image
            src={currentMedia}
            alt={`portfolio-media-${currentMediaIndex}`}
            width={380}
            height={250}
          />
        )}
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;