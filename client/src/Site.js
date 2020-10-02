import React from 'react'
import Header from './components/Header'
import Article from './components/Article'

function Site() {
    return (
        <div>
            <Authentication />
            <Header />
            <Article
                key="1"
                title="Title"
                byline="Derek Holtzman"
                publishDate="9/30/2020"
                articleBody={lorem.generateParagraphs(4)}
            />
        </div>
    )
}

export default Site
