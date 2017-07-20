import React from 'react'
import wrapLink from '../components/wrapLinkHOC'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import GrommetButton from 'grommet/components/Button'

const Button = props => (
  <Box justify='center'>
    <GrommetButton box hoverIndicator={{background: 'neutral-4'}} plain label={props.label} onClick={() => {}} />
  </Box>
)

const menu = (props) => {
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
        {wrapLink('showcase')(<Button label='showcase' />)}
        {wrapLink('contactMe')(<Button label='Contact Me' />)}
      </Box>
    </Header>
  )
}

export default menu
