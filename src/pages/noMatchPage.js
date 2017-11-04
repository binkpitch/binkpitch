import React from 'react'
import Box from 'grommet/components/Box'
import Meter from 'grommet/components/Meter'
import Value from 'grommet/components/Value'

const noMatchPage = () => {
  return (
    <Box
      margin='large'
      style={{height: '80vh'}}
      align='center'
      justify='center'
      >
      <Value value={404} units='-->Not Found' size='large' />
      <Meter
        vertical={false}
        size='large'
        colorIndex='graph-2'
        value={100}
        />
    </Box>
  )
}

export default noMatchPage
