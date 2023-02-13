import React from "react";
import article1 from "../assets/1-article.png";
import article2 from "../assets/2-article.png";
import article3 from "../assets/3-article.png";

// import Mycard from "./Mycard.js";

const Article = () => {
  return (
    <div className="article">
      <div className="heading">Latest Articles</div>
      <div className="cards">
        {/* Row 1 */}
        <div className="row1">
          {/* Article Card 1 */}
          <div className="card">
            <div className="card-img">
              <img src={article1} alt="" />
            </div>
            <div className="card-text-main">Grilled Tomatoes at Home</div>
            <div className="card-text-content">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <button className="button-card">Read More</button>
          </div>

          {/* Article Card 2 */}
          <div className="card">
             <div className="card-img">
               <img src={article2} alt="2-article" />
             </div>
             <div className="card-text-main">Snacks for Travel</div>
             <div className="card-text-content">
               PLorem Ipsum is simply dummy text of the printing and typesetting
               industry. Lorem Ipsum has been the industry's standard...
             </div>
             <button className="button-card">Read More</button>
           </div>

          {/* Article Card 3 */}
          <div className="card">
            <div className="card-img">
              <img src={article3} alt="" />
            </div>
            <div className="card-text-main">Grilled Tomatoes at Home</div>
            <div className="card-text-content">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <button className="button-card">Read More</button>
          </div>
        </div>
      </div>

      <div className="LRbutton">
        <button className="Lbutton fa fa-angle-left"></button>
        <p className="page-no">1/2</p>
        <button className="Rbutton fa fa-angle-right"></button>
      </div>
    </div>
  );
};

export default Article;
