import React from 'react';
import './Herosection.css';
function Herosection() {
  return (
    <div>
      <header class="heropanel--video" data-vide-bg="mp4: https://www.gordonmac.com/wp-content/uploads/storm-1.mp4, poster: https://www.gordonmac.com/wp-content/uploads/storm-1.png" data-vide-options="posterType: png, loop: false, muted: true, position: 50% 50%">
    <div class="heropanel__content">
         <h1><a href="/" rel="home">Title</a></h1>
         <p>Subtitle</p>
    </div>
 </header>
    </div>
  )
}

export default Herosection
