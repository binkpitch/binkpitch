import React from 'react'
import PropTypes from 'prop-types'
import wrapLink from '../components/wrapLinkHOC'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import GrommetButton from 'grommet/components/Button'

const Button = props => (
  <GrommetButton box hoverIndicator={{background: 'neutral-4'}} plain label={props.label} onClick={() => {}} />
)

Button.PropTypes = {
  label: PropTypes.string
}

const menu = () => {
  return (
    <Header
      splash={false}
      float
      fixed>
      <Box
        justify='start'
        full='horizontal'
        direction='row'
        pad={{horizontal: 'large'}}>
        {wrapLink('landing')(<Button label='Back to top' />)}
      </Box>
      <Box
        justify='end'
        full='horizontal'
        direction='row'
        pad={{horizontal: 'large'}}>
        {wrapLink('whoAmI')(<Button label='Who Am I' />)}
        {wrapLink('whatICode')(<Button label='What I Code' />)}
        {wrapLink('showcase')(<Button label='Showcase' />)}
        {wrapLink('contactMe')(<Button label='Contact Me' />)}
      </Box>
    </Header>
  )
}

export default menu
