import React, { useState } from 'react';
import './Blog.css';
import './Article.css';
import articles from './Articles';


const Modal = ({ onClose, children }) => {
  return (
    <div className="modal">
       {children}
      <button class="button-closed" onClick={onClose}>Zamknij</button>
    </div>
  );
};

const Article = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (articleId) => {
    const article = articles.find(a => a.id === articleId);
    setSelectedArticle(article);
    setModalOpen(true);
  };

  return (
    <div className='cards1__container'>
      {articles.map((article) => (
        <li key={article.id} className='cards1__item' onClick={() => handleArticleClick(article.id)}>
          <div className='cards1__item__link'>
            <figure className='cards1__item__pic-wrap'>
              <img className='cards1__item__img' alt={article.title} src={article.src} />
            </figure>
            <div className='cards1__item__info'>
              <h5 className='cards1__item__text'>{article.title}</h5>
            </div>
          </div>
        </li>
      ))}

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
           <div className='article_container'>
           <div className='img2_container'>
          <img className='cards2__item__img' alt={selectedArticle?.title} src={selectedArticle?.src} />
          </div>
          <div className='txt_container'>
          <h2 className='h2-content'>{selectedArticle?.title}</h2>
          <div className='txt-content'>{selectedArticle?.content}</div>
          </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Article;