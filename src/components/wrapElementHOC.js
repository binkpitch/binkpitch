import React from 'react'
import { Element } from 'react-scroll'

const wrapElement = name => c => (
  <Element name={name}>
    {c}
  </Element>
)

export default wrapElement
