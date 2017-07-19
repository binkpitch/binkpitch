import React from 'react'
import { Link } from 'react-scroll'

const wrapLink = to => c => (
  <Link to={to} offset={-20} smooth='easeOutCubic' duration={500}>
    {c}
  </Link>
)

export default wrapLink
