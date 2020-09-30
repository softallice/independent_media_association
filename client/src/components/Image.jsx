import React from 'react'

function Image() {
    return (
        <div>
            <div className="article-image">{this.props.image}</div>
            <h4 className="article-image-caption">{this.props.imageCaption}</h4>
            <h4 className="article-image-byline">Photo by ${this.props.imageByLine}</h4>
        </div>
    )
}

export default Image
