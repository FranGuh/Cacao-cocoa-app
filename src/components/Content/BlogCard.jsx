import React from 'react';

const BlogCard = ({ text, autor , source }) => {
  return (
    <div className='card'>
      <figure className="text-end">
        <blockquote className="blockquote">
          <p className="mb-0">
            {text}
          </p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {autor} <cite title="Source Title">{source}</cite>
        </figcaption>
      </figure>
    </div>
  )
}

export default BlogCard;
