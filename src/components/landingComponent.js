import React from 'react'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'

const landing = () => {
  return (
    <div className='landing'>
      <Box align='center' justify='center' full='vertical'>
        <Heading align='center'>
          Hi, my name is Bink.
        </Heading>
        <Heading align='center' size='small'>
          I build web and mobile application.
        </Heading>
        <Box direction='row' margin={{top: 'medium'}}>
          <Box margin='medium'>
            <Button label='Learn More'
              onClick={() => {}}
              primary />
          </Box>
          <Box margin='medium'>
            <Button label='Contact Me'
              onClick={() => {}} />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default landing
