import React from 'react';

function BlogPostSection({ headerText, blogList }) {
  return (
    <div class="container m-3">
      <div class="row">
        <div class="col">{headerText}</div>
      </div>

      {blogList.map((blogItem, index) => (
        <div class="row">
          <div class="col">{blogItem?.headline}</div>
        </div>
      ))}
    </div>
  );
}

export default BlogPostSection;
