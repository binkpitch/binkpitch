import React from 'react'
import InjectSheet from 'react-jss'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Card from 'grommet/components/Card'
import Image from 'grommet/components/Image'

const styles = {
  landingContainer: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // height: '100vh',
    // backgroundColor: '#f7f7f7'
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundFilter: 'blur(5px)'
  },
  whoamiContainer: {
    // height: '50vh'
  },
  whatidoContainer: {
    // height: '50vh',
    // backgroundColor: '#f7f7f7'
  },
  showcaseContainer: {
    // height: '50vh'
  },
  contactmeContainer: {
    // height: '50vh'
  }
}

const HomePage = () => {
  return (
    <div>
      <div style={styles.landingContainer}>
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

      <div style={styles.whoamiContainer}>
        <Box margin='large' align='center'>
          <Box alignSelf='start'>
            <Heading tag='h2'>
              Who Am I
            </Heading>
          </Box>
          <Heading tag='h3' align='center' margin={'medium'}>
            A newly-graduate <b>computer engineering</b> student <br /> with a goal of becoming <b>a fullstack developer</b>.
          </Heading>
          <Box direction='row' justify='center'>
            <Box margin='medium'>
              <Value value={22}
                label='Age'
                units='yr.'
                size='large' />
            </Box>
            <Box margin='medium'>
              <Value value={3.74}
                label='Grade'
                units='GPA'
                size='large' />
            </Box>
            <Box margin='medium'>
              <Value value={5}
                label='Software house intern'
                units='mo.'
                size='large' />
            </Box>
          </Box>
        </Box>
      </div>

      <div style={styles.whatidoContainer}>
        <Box margin='large'>
          <Box margin={{vertical: 'large'}} alignSelf='start'>
            <Heading tag='h2'>
              What I Code
            </Heading>
          </Box>
          <Tiles flush={false}>
            <Tile>
              <Card thumbnail={<Image size='small' src={require('../assets/react.png')} />}
                heading='React'
                label='JS Library' />
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
            {/* <Tile>
              <Card thumbnail='/img/carousel-1.png'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile>
            <Tile>
              <Card thumbnail='/img/carousel-1.png'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile> */}
          </Tiles>
        </Box>
      </div>

      {/*
      <div style={styles.showcaseContainer}>
        <p>
          I am a newly-graduate computer engineering student at Sirindhorn International Institute of Technology, Thammasat University and I am interested in applying for a position related to developing React or React-Native application.
        </p>
      </div>
      <div style={styles.contactmeContainer}>
        <p>
          I am a newly-graduate computer engineering student at Sirindhorn International Institute of Technology, Thammasat University and I am interested in applying for a position related to developing React or React-Native application.
        </p>
      </div> */}
    </div>
  )
}

export default InjectSheet(styles)(HomePage)
