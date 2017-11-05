import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'

const whoAmI = () => {
  return (
    <div className='whoAmI'>
      <Box margin='large' align='center'>
        <Box margin={{vertical: 'large'}} alignSelf='start'>
          <Heading tag='h2'>
            Who Am I
          </Heading>
        </Box>
        <Heading tag='h3' align='center' margin={'medium'}>
          A front-end developer with a hand-on experience on React projects for <b>more than a year.</b>
        </Heading>
        <Box direction='row' justify='center'>
          <Box margin='medium'>
            <Value
              value={22}
              label='Age'
              units='yr.'
              size='large'
              />
          </Box>
          <Box margin='medium'>
            <Value
              value={3.74}
              label='Grade'
              units='GPA'
              size='large'
              />
          </Box>
          <Box margin='medium'>
            <Value
              value={5}
              label='Software house intern'
              units='mo.'
              size='large'
              />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default whoAmI
