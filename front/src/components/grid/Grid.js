import React from 'react';
import './Grid.css'
function Grid() {
  return (
    <div>
      {/* 
        Note: As of 2/20, pens linked in brackets will not render 
        if this pen is linked to in a parent pen. This pen's HTML 
        is mostly used to demo the pen's CSS 
      */}
      <div className="band">
        <div className="item-1">
          <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" className="card">
            <div className="thumb" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg)" }}></div>
            <article>
              <h1>International Artist Feature: Malaysia</h1>
              <span>Mary Winkler</span>
            </article>
          </a>
        </div>

        {/* Replace the following sections with your actual React components or content */}
        <a href="https://codepen.io/captproton/pen/jOPEoVg" target="_blank" rel="noopener noreferrer">
          {/* Your content here */}
        </a>

        <a href="https://codepen.io/captproton/pen/jOPEoVg" target="_blank" rel="noopener noreferrer">
          {/* Your content here */}
        </a>

        <a href="https://codepen.io/captproton/pen/jOPEoVg" target="_blank" rel="noopener noreferrer">
          {/* Your content here */}
        </a>

        {/* Add more sections as needed */}

        {/*  illustration card  */}
        <a href="https://codepen.io/captproton/pen/jOPEoVg" target="_blank" rel="noopener noreferrer">
          {/* Your content here */}
        </a>

        {/*  photo card  */}
        <a href="https://codepen.io/captproton/pen/wvaBbEL" target="_blank" rel="noopener noreferrer">
          {/* Your content here */}
        </a>

        {/*  video card  */}
        <a href="https://codepen.io/captproton/pen/dyoPELj" target="_blank" rel="noopener noreferrer">
          {/* Your content here */}
        </a>
      </div>
    </div>
  );
}

export default Grid;
