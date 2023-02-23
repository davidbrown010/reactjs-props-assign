import React from 'react';

function ImgParagraph({ paragraphText, imageURL }) {
  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-3">
          <img src={{ imageURL }} style={{ width: 100, height: 100 }} />
        </div>
        <div className="col-9">
          <p>{paragraphText}</p>
        </div>
      </div>
    </div>
  );
}

export default ImgParagraph;
