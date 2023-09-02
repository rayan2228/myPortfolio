import React from "react";

const Image = ({ src, alt, imgClassName, className }) => {
  return (
    <div className={`${className}`}>
      <picture>
        <img src={src} alt={alt} loading="lazy" className={`${imgClassName}`} />
      </picture>
    </div>
  );
};

export default Image;
