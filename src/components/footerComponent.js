import React from 'react'
import InjectSheet from 'react-jss'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'

const footer = () => {
  return (
    <Footer justify='end'>
      <Box direction='row'
        style={{marginRight: '3vh'}}
        align='center'
        pad={{'between': 'medium'}}>
        <Anchor rel='noopener noreferrer' target='_blank' href='https://github.com/binkpitch/binkpitch'>
          View source code
        </Anchor>
      </Box>
    </Footer>
  )
}

export default InjectSheet()(footer)
