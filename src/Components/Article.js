import React, { useState } from "react";
import article1 from "../assets/1-article.png";
import article2 from "../assets/2-article.png";
import article3 from "../assets/3-article.png";
import article4 from "../assets/4-article.png";
import article5 from "../assets/5-article.png";
import article6 from "../assets/6-article.png";

const Article = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [leftButtonColor, setLeftButtonColor] = useState("gray");
  const [rightButtonColor, setRightButtonColor] = useState("gray");

  const articles = [
    {
      image: article1,
      title: "Grilled Tomatoes at Home",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: article2,
      title: "Snacks for Travel",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: article3,
      title: "Post-workout Recipes",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: article4,
      title: "Snacks for Travel",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: article5,
      title: "Crunchwrap Supreme",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      image: article6,
      title: "Broccoli Cheese Soup",
      content:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
  ];

  const totalPages = Math.ceil(articles.length / 3);

  const handleLeftClick = () => {
    if (currentPage === 1) {
      setLeftButtonColor("black");
      return;
    }
    setCurrentPage(currentPage - 1);
    setRightButtonColor("black");
    setLeftButtonColor("black");
  };
  
  const handleRightClick = () => {
    if (currentPage === totalPages) {
      setRightButtonColor("gray");
      return;
    }
    setCurrentPage(currentPage + 1);
    setRightButtonColor("gray");
    setLeftButtonColor("gray");
  };  

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;
  const currentArticles = articles.slice(startIndex, endIndex);

  return (
    <div className="article">
      <div className="heading">Latest Articles</div>
      <div className="cards">
        <div className="row1">
          {currentArticles.map((article, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={article.image} alt="" />
              </div>
              <div className="card-text-main">{article.title}</div>
              <div className="card-text-content">{article.content}</div>
              <button className="button-card">Read More</button>
            </div>
          ))}
        </div>
      </div>
      <div className="LRbutton">
        <button
          className="Lbutton fa fa-angle-left"
          style={{ color: leftButtonColor }}
          onClick={handleLeftClick}
        ></button>
        <p className="page-no">
          {currentPage}/{totalPages}
        </p>
        <button
          className="Rbutton fa fa-angle-right"
          style={{ color: rightButtonColor }}
          onClick={handleRightClick}
        ></button>
      </div>
    </div>
  );
};

export default Article;
