import { hot } from 'react-hot-loader'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { LogoSm, LogoMd, LogoLg } from './Logos'
import { Decoration } from 'assets/theme/decoration'
import { Twitter, LinkedIn, Github } from 'assets/theme/social'

import {
  HomeContainer,
  HomeContainerInner,
  HeadlineAndButtons,
  DecorationBox,
  DecorationBoxMd,
  Headline,
  ButtonBox,
  WorkButton,
  DesignsButton,
  ButtonDot,
  LogoContainer,
  SocialBox,
  SocialBox2,
  Social,
  TopLeftDecoration,
  TopRightDecoration,
  BottomRightDecoration,
  BottomLeftDecoration,
  ButtonBox2,
  MidButton
} from './styles'

const Home = ({ homeRef, defaultTheme, handleNavClick })=> {

  const[pageLoaded, setPageLoaded] = useState(false)
  useEffect(()=>{ 
    setPageLoaded(true)
  },[])

  return (
    <HomeContainer ref={homeRef}>
      <HomeContainerInner defaultTheme={defaultTheme}>

        <LogoContainer defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
          <LogoMd />
          <LogoLg />
        </LogoContainer>

        <HeadlineAndButtons>
          <DecorationBox pageLoaded={pageLoaded}>
            <Decoration />
          </DecorationBox>
          <DecorationBoxMd pageLoaded={pageLoaded}>
            <Decoration />
          </DecorationBoxMd>
          <DecorationBoxMd pageLoaded={pageLoaded} secondary>
            <Decoration />
          </DecorationBoxMd>
          
          <Headline defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
            <h1>Front-end engineer <span>and</span> UX designer</h1>
            <LogoContainer defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
              <LogoSm />
            </LogoContainer>
          </Headline>

          <ButtonBox pageLoaded={pageLoaded}>
            <WorkButton onClick={()=>handleNavClick('work')}>
              work
              <ButtonDot />
              <ButtonDot />
            </WorkButton>
            <DesignsButton defaultTheme={defaultTheme} onClick={()=>handleNavClick('designs')}>
              designs
              <ButtonDot designDot defaultTheme={defaultTheme} />
              <ButtonDot designDot defaultTheme={defaultTheme} />
            </DesignsButton>
          </ButtonBox>

          <SocialBox defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
            <Social 
              href='https://twitter.com/Dobre_Alexander'
              target='_blank' rel="noopener noreferrer">
              <Twitter />
            </Social>
            <Social 
              href='https://www.linkedin.com/in/alexandru-dobre-492242143/'
              target='_blank' rel="noopener noreferrer">
              <LinkedIn />
            </Social>
            <Social 
              href='https://github.com/Zerelt'
              target="_blank" rel="noopener noreferrer">
              <Github />
            </Social>
          </SocialBox>
        </HeadlineAndButtons>
      </HomeContainerInner>

      <ButtonBox2 defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
        <MidButton onClick={()=>handleNavClick('work')}>
          work
          <ButtonDot />
          <ButtonDot />
        </MidButton>
        <MidButton defaultTheme={defaultTheme} onClick={()=>handleNavClick('designs')}>
          designs
          <ButtonDot designDot defaultTheme={defaultTheme} />
          <ButtonDot designDot defaultTheme={defaultTheme} />
        </MidButton>
      </ButtonBox2>
      <SocialBox2 defaultTheme={defaultTheme} pageLoaded={pageLoaded}>
        <Social 
          href='https://twitter.com/Dobre_Alexander'
          target='_blank' rel="noopener noreferrer">
          <Twitter />
        </Social>
        <Social 
          href='https://www.linkedin.com/in/alexandru-dobre-492242143/'
          target='_blank' rel="noopener noreferrer">
          <LinkedIn />
        </Social>
        <Social 
          href='https://github.com/Zerelt'
          target="_blank" rel="noopener noreferrer">
          <Github />
        </Social>
      </SocialBox2>

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
  handleNavClick: PropTypes.func
}

export default hot(module)(Home)