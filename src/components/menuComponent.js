import React from 'react'
import Header from 'grommet/components/Header'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'

const menu = (props) => {
  return (
    <Header
      splash={false}
      float
      fixed>
      <Box
        justify='between'
        full='horizontal'
        direction='row'
        pad={{vertical: 'small', horizontal: 'large'}}
        responsive>
        <Button plain label='Who Am I' onClick={() => {}} />
        <Button plain label='What I Code' onClick={() => {}} />
        <Button plain label='Showcase' onClick={() => {}} />
        <Button plain label='Contact Me' onClick={() => {}} />
      </Box>
    </Header>
  )
}

export default menu
