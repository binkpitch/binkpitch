import React from 'react'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'
import Image from 'grommet/components/Image'

const whatICode = () => {
  return (
    <div className='whatICode'>
      <Box margin={{top: 'large', horizontal: 'large'}}>

        {/* What I Code  */}
        <Box margin={{vertical: 'large'}} alignSelf='start'>
          <Heading tag='h2'>
            What I Code
          </Heading>
        </Box>
        <Tiles fill>
          <Tile>
            <Card
              thumbnail={<Image size='small' src={require('../assets/react.png')} />}
              heading='React'
              label='JS Library'
              />
          </Tile>
          <Tile>
            <Card thumbnail={<Image size='small' src={require('../assets/react.png')} />}
              heading='React Native'
              label='App Framework' />
          </Tile>
          <Tile>
            <Card thumbnail={<Image size='small' src={require('../assets/redux.png')} />}
              heading='Redux'
              label='State Container' />
          </Tile>
          <Tile>
            <Card thumbnail={<Image size='small' src={require('../assets/firebase.png')} />}
              heading='Firebase'
              label='Infrastructure' />
          </Tile>
        </Tiles>

        <Box margin={{top: 'large'}} alignSelf='start'>
          <Heading tag='h2'>
            Also Interested In
          </Heading>
          <Box margin={{top: 'large'}}>
            <Tiles fill>
              <Tile>
                <Card thumbnail={<Image size='small' src={require('../assets/mern.png')} />}
                  heading='MERN'
                  label='Universal App' />
              </Tile>
            </Tiles>
          </Box>
        </Box>

      </Box>
    </div>
  )
}

export default whatICode
