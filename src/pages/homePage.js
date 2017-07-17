import React from 'react'
import InjectSheet from 'react-jss'
import Headline from 'grommet/components/Headline'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Heading from 'grommet/components/Heading'
import Value from 'grommet/components/Value'

const styles = {
  landingContainer: {
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column',
    // height: '100vh',
    backgroundColor: '#f7f7f7'
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundFilter: 'blur(5px)'
  },
  whoamiContainer: {
    height: '50vh'
  },
  whatidoContainer: {
    // height: '50vh'
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
          <Headline>
            Hi, my name is Bink.
          </Headline>
          <Headline size='small'>
            I build web and mobile application.
          </Headline>
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

      {/*
      <div style={styles.whatidoContainer}>
        <p>
          I am a newly-graduate computer engineering student at Sirindhorn International Institute of Technology, Thammasat University and I am interested in applying for a position related to developing React or React-Native application.
        </p>
      </div>
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
