import React from "react";

const BlogCard = ({ date, description, imageUrl, link }) => {
  const cardStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-[558px] rounded-[20px] overflow-hidden relative block"
    >
      <div className="w-full h-64 md:h-80" style={cardStyle}></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-opacity-10 bg-black">
        <div>
          <p className="md:text-lg font-bold">{date}</p>
          <p className="md:text-2xl md:font-bold">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
