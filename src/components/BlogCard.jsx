import React from "react";

const BlogCard = ({ date, description, imageUrl }) => {
  const cardStyle = {
    background: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="max-w-[558px] rounded-[20px] overflow-hidden shadow-lg relative">
      <div className="w-full h-64" style={cardStyle}></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-opacity-10 bg-black">
        <div>
          <p className="text-lg font-bold">{date}</p>
          <p className="text-2xl font-bold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
