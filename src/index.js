import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Malou from './lib/malou'

export default class ReactMalou extends Component {
  static propTypes = {
    paragraphs: PropTypes.string,
    sentences: PropTypes.string
  }

  static defaultProps = {
    paragraphs: '1',
    sentences: '5'
  }

  malou = new Malou()

  createParagraph (sentences) {
    const paragraph = this.malou.getParagraph(sentences)
    return <p>{paragraph}</p>
  }

  arrayParagraphs (paragraphs) {
    return new Array(Number(paragraphs)).fill(0)
  }

  render() {
    const {
      paragraphs,
      sentences
    } = this.props

    return (
      <div>
        {this.arrayParagraphs(paragraphs).map(element => this.createParagraph(sentences))}
      </div>
    )
  }
}
