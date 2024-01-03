import React, { useEffect } from 'react';
import $ from 'jquery';
import './Card.css';

function Card() {
  useEffect(() => {
    const switchGrid = () => {
      if (window.innerWidth > 768) {
        document.querySelectorAll(".product-item").forEach(function (item) {
          const size = 1 + Math.floor(Math.random() * 3);
          item.style.gridColumn = `span ${size}`;
          item.style.gridRow = `span ${size}`;
        });
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        document.querySelectorAll(".product-item").forEach(function (item) {
          item.removeAttribute("style");
        });
      }
    };

    const handleScroll = () => {
      const buttonRow = document.querySelector(".button-row");
      if (buttonRow) {
        if (window.scrollY >= 500) {
          buttonRow.classList.add("sticky");
        } else {
          buttonRow.classList.remove("sticky");
        }
      }
    };

    document.addEventListener("DOMContentLoaded", switchGrid);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("DOMContentLoaded", switchGrid);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div><div class="grid">
    <header>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Picasso_signature.svg" alt="Picasso Signature"/>
    </header>
  
    <figure class="figure-1">
      <img src="https://www.grandspeintres.com/wp-content/uploads/2017/07/picasso-450x450.jpg" alt="Picture of Picasso"/>
      <figcaption>A picture of the artist Pablo Picasso</figcaption>
    </figure>
  
    <article class="picasso-1">
      <h1>Pablo Picasso and his paintings</h1>
      <p><b>Pablo Picasso</b> is probably the most important figure of 20th century, in terms of art, and art movements that occurred over this period. Before the age of 50, the Spanish born artist had become the most well known name in modern art, with the most distinct style and eye for artistic creation. There had been no other artists, prior to Picasso, who had such an impact on the art world, or had a mass following of fans and critics alike, as he did.</p>
    </article>
  
  
  
  
    <figure class="figure-2">
      <img src="https://www.pablopicasso.org/images/paintings/the-women-of-algiers.jpg" alt="The Women of Algiers, 1955 by Pablo Picasso"/>
      <figcaption>The Women of Algiers, 1955</figcaption>
    </figure>
  
    <aside class="sidebar-left">
      <h2>Show Your Support</h2>
      <a class="btn" href="#">Our Store</a>
    </aside>
    
    <footer>
      <p>Content extracted from <a href="https://www.pablopicasso.org/">PabloPicasso.org</a></p>
    </footer>
  </div>
</div>    

  );
}

export default Card;
