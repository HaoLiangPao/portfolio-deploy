import React from "react";

const SmallProjectItem = ({ project }) => {
  const { title, image, liveDemo, category } = project;

  return (
    <div className='item'>
      <div className='item-image'>
        <img src={image} alt='' />
      </div>
      <div className='item-text'>
        <div className='item-text-wrap'>
          <p className='item-text-category'>{category}</p>
          <h2 className='item-text-title'>{title}</h2>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={liveDemo}
            className='item-text-liveDemo'
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default SmallProjectItem;
