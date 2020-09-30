import React from 'react'

function Article(props) {
    return (
        <div>
            <h1 className="article-title">{props.title}</h1>
            <h4 className="article-byline">{props.byline}</h4>
            <h4 className="article-publishdate">{props.publishDate}</h4>
            {/* <Image /> */}
            <p className="article-text">{props.articleBody}</p>
        </div>
    )
}

export default Article
