import React, { useState } from 'react';

import Images from '../views/Images/Images';
import Settings from '../views/Settings/Settings';
import Staff from '../views/Staff/Staff';
import Tags from '../views/Tags/Tags';
import Articles from '../views/Articles/Articles';
import Author from '../views/Articles/Author';

const ViewContext = React.createContext();

let viewReducer = {
  images: Images,
  settings: Settings,
  staff: Staff,
  tags: Tags,
  articles: Articles,
  author: Author,
};

function ViewContextLayer({ children }) {
  const [view, setView] = useState('');
  const [article, setArticle] = useState('')
  const ActiveWindow = viewReducer[view];

  return (
    <ViewContext.Provider
      value={{ ActiveWindow, setView, article, setArticle, }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export { ViewContextLayer, ViewContext };
