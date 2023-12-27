import React from 'react';

const ArticleModal = ({ element, onClose }) => {
  return (
    <div className="article-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{element.title}</h2>
        <p>{element.description}</p>
        <a href={element.url} target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  );
};

export default ArticleModal;