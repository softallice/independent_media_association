import React from 'react';
import { LoremIpsum } from "lorem-ipsum";
import Header from './components/Header'
import Article from './components/Article'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function App() {
  return (
    <div className="Site">
      <Header />
      {
      <Article 
        key={i}
        title="Title"
        byline="Derek Holtzman"
        publishDate="9/30/2020"
        articleBody={lorem.generateParagraphs(4)}
      />
      }
    </div>
  );
}

export default App;
