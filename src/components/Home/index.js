import { hot } from 'react-hot-loader'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { LogoLg } from './Logo'
import { Decoration, DecorationRotated } from 'assets/theme/decoration'
import { Twitter, LinkedIn, Github } from 'assets/theme/social'

import {
  HomeContainer,
  HomeContainerInner,
  LogoContainer,
  HeadlineAndButtons,
  DecorationBoxHorizontal,
  DecorationBoxVertical,
  Headline,
  ButtonBoxDesktop,
  DesktopButton,
  ButtonDot,
  SocialBox,
  Social,
  ButtonBoxMobile,
  MobileButton,
  TopLeftDecoration,
  TopRightDecoration,
  BottomRightDecoration,
  BottomLeftDecoration
} from './styles'

const Home = ({ homeRef, defaultTheme, handleNavClick, height })=> {

  const[pageLoaded, setPageLoaded] = useState(false)
  useEffect(()=>{ 
    setPageLoaded(true)
  },[])

  return (
    <HomeContainer ref={homeRef} height={height}>
      <HomeContainerInner defaultTheme={defaultTheme}>

        <LogoContainer defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
          <LogoLg />
        </LogoContainer>

        <HeadlineAndButtons>
          <DecorationBoxHorizontal pageLoaded={pageLoaded}>
            <Decoration />
          </DecorationBoxHorizontal>
          <DecorationBoxVertical pageLoaded={pageLoaded}>
            <DecorationRotated />
          </DecorationBoxVertical>
          <DecorationBoxVertical pageLoaded={pageLoaded} secondary>
            <DecorationRotated />
          </DecorationBoxVertical>
          
          <Headline defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
            <h1>Front-end engineer <span>and</span> UX Designer</h1>
          </Headline>

          <ButtonBoxDesktop pageLoaded={pageLoaded}>
            <DesktopButton onClick={()=>handleNavClick('code')}>
              code
              <ButtonDot />
              <ButtonDot />
            </DesktopButton>
            <DesktopButton defaultTheme={defaultTheme} onClick={()=>handleNavClick('designs')}>
              designs
              <ButtonDot designDot defaultTheme={defaultTheme} />
              <ButtonDot designDot defaultTheme={defaultTheme} />
            </DesktopButton>
          </ButtonBoxDesktop>

          <SocialBox defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
            <Social 
              href='https://twitter.com/Dobre_Alexander'
              target='_blank' rel="noopener noreferrer" aria-label="Twitter Link">
              <Twitter />
            </Social>
            <Social 
              href='https://www.linkedin.com/in/alexandru-dobre-492242143/'
              target='_blank' rel="noopener noreferrer" aria-label="LinkedIn Link">
              <LinkedIn />
            </Social>
            <Social 
              href='https://github.com/Zerelt'
              target="_blank" rel="noopener noreferrer" aria-label="Github Link">
              <Github />
            </Social>
          </SocialBox>
        </HeadlineAndButtons>
      </HomeContainerInner>

      <ButtonBoxMobile defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
        <MobileButton onClick={()=>handleNavClick('code')}>
          code
          <ButtonDot />
          <ButtonDot />
        </MobileButton>
        <MobileButton defaultTheme={defaultTheme} onClick={()=>handleNavClick('designs')}>
          designs
          <ButtonDot designDot defaultTheme={defaultTheme} />
          <ButtonDot designDot defaultTheme={defaultTheme} />
        </MobileButton>
      </ButtonBoxMobile>

      <TopLeftDecoration 
        defaultTheme={defaultTheme} 
        pageLoaded={pageLoaded} 
      />
      <TopRightDecoration 
        defaultTheme={defaultTheme} 
        pageLoaded={pageLoaded} 
      />
      <BottomRightDecoration 
        defaultTheme={defaultTheme} 
        pageLoaded={pageLoaded} 
      />
      <BottomLeftDecoration 
        defaultTheme={defaultTheme} 
        pageLoaded={pageLoaded}
      />
    
    </HomeContainer>
  )
}

Home.propTypes = {
  homeRef: PropTypes.func,
  defaultTheme: PropTypes.bool,
  handleNavClick: PropTypes.func,
  height: PropTypes.number
}

export default hot(module)(Home)