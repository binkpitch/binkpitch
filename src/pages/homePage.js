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
import Hero from 'grommet/components/Hero'
import Anchor from 'grommet/components/Anchor'
import PlatformAndroid from 'grommet/components/icons/base/PlatformAndroid'
import PlatformApple from 'grommet/components/icons/base/PlatformApple'
import SocialGithub from 'grommet/components/icons/base/SocialGithub'
import Cloud from 'grommet/components/icons/base/Cloud'
import Footer from 'grommet/components/Footer'

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
          <Tiles fill>
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
          </Tiles>
        </Box>
      </div>

      <div style={styles.showcaseContainer}>
        <Box margin='large'>
          <Box margin={{vertical: 'large'}} alignSelf='start'>
            <Heading tag='h2'>
              Showcase
            </Heading>
          </Box>

          <Hero background={<Image src={require('../assets/picnow.png')}
            fit='cover'
            align={{left: true}}
            full />}
            size='large'
            >
            <Box direction='row'
              justify='center'
              align='center'>
              <Box basis='1/2'
                align='end'
                pad='medium' />
              <Box basis='1/2'
                align='start'
                pad='medium'
                style={{backgroundColor: 'rgba(222, 222, 222, 0.5)'}}>
                <Heading uppercase margin='none'>
                  PicNow
                </Heading>
                <Heading tag='h2' margin='none'>
                  A mobile application build to solve the pain of taking photo ID for graduation.
                </Heading>
                <Box direction='row' responsive={false} margin={{top: 'medium'}}>
                  <Anchor target='_blank' icon={<PlatformAndroid />}
                    label='Google Play'
                    href='https://play.google.com/store/apps/details?id=me.picnow&hl=en' />
                  <Box margin={{left: 'medium'}}>
                    <Anchor target='_blank' icon={<PlatformApple />}
                      label='App Store'
                      href='https://itunes.apple.com/us/app/picnow/id1200696255?mt=8' />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Hero>

          <Hero style={{backgroundColor: 'rgba(222, 222, 222, 0.5)', marginTop: '10vh'}}>
            <Box direction='row'
              justify='center'
              align='center'>
              <Box basis='1/2'
                align='end'
                pad='medium'>
                <Image size='small' src={require('../assets/reactor.ico')} />
              </Box>
              <Box basis='1/2'
                align='start'
                pad='medium'>
                <Heading margin='none'>
                  Reactor
                </Heading>
                <Heading tag='h2' margin='none'>
                  A React boilerplate with Redux.
                </Heading>
                <Box direction='row' responsive={false} margin={{top: 'medium'}}>
                  <Anchor target='_blank' icon={<Cloud />}
                    label='GitHub Pages'
                    href='https://binkpitch.github.io/reactor/' />
                  <Box margin={{left: 'medium'}}>
                    <Anchor target='_blank' icon={<SocialGithub />}
                      label='GitHub'
                      href='https://github.com/binkpitch/reactor' />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Hero>
        </Box>
      </div>

      <div style={styles.contactmeContainer}>
        <Box margin='large' style={{height: '50vh'}}>
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

      <Footer justify='end'>
        <Box direction='row'
          style={{marginRight: '3vh'}}
          align='center'
          pad={{'between': 'medium'}}>
          <Anchor target='_blank' href='https://github.com/binkpitch/binkpitch'>
              View source code
            </Anchor>
          <Anchor href='#'>
              Back to top
            </Anchor>
        </Box>
      </Footer>
    </div>
  )
}

export default InjectSheet(styles)(HomePage)
