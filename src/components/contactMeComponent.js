import React from 'react'
import InjectSheet from 'react-jss'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'

const ContactMe = () => {
  return (
    <div className='contactme'>
      <Box margin='large' style={{height: '80vh'}}>
        <Box margin={{vertical: 'large'}} alignSelf='start'>
          <Heading tag='h2'>
              Contact Me
          </Heading>
        </Box>
        <Box align='center' justify='center' full='vertical'>
          <Heading tag='h3'>
              Drop me an email at...
          </Heading>
          <Heading tag='h1'>
              pitchayutn@gmail.com
          </Heading>
        </Box>
      </Box>
    </div>
  )
}

export default InjectSheet()(ContactMe)
