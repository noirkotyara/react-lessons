import React from 'react';
import cl from './News.module.css';

const News = () => {
    return (
        <div>
          <ActionLink/>
        </div>
    );
}

function ActionLink() {
  function handleClick(e) {
    // e.preventDefault();
    console.log('По ссылке кликнули.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Нажми на меня
    </a>
  );
}


export default News;