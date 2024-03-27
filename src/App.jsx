import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Search from './search';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [articles, setArticles] = useState([]);

  const fetchArticles = (query) => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`) 
    .then((response) => response.json())
    .then((data) => setArticles(data.hits))
    .catch((error) => console.error('error fetching articles:', error));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <Search onSearch={fetchArticles} />
      <ul>
        {articles.map((article) => (
          <li key={article.objectID}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;