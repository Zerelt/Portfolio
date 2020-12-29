import { hot } from 'react-hot-loader'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import LightOrDark from 'components/LightOrDark'
import { Twitter, Github, LinkedIn } from 'assets/theme/social'
import { 
  MobileMenuContainer, 
  ButtonContainer, 
  SocialContainer, 
  MobileButton, 
  CloseButton,
  Social
} from './styles'

const MobileMenu = ({ defaultTheme, currentPage, menuOpen, handleMenu, handleNavClick, width, handleTheme })=> {
  const handleButtonClick = (section)=>{
    handleNavClick(section);
    handleMenu(false);
  }
  useEffect(() => {
    if (width>1200) {
      handleMenu(false)
    }
  }, [width,handleMenu])
  
  return(
    <MobileMenuContainer 
      defaultTheme={defaultTheme}
      menuOpen={menuOpen}>
      <CloseButton 
        onClick={()=>handleMenu(false)}
        defaultTheme={defaultTheme}>
        close
      </CloseButton>
      <LightOrDark mobile defaultTheme={defaultTheme} handleTheme={handleTheme} />
      <ButtonContainer>
        <MobileButton 
          defaultTheme={defaultTheme}
          currentPage={currentPage==='home'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('home')}>
          home
        </MobileButton>
        <MobileButton 
          defaultTheme={defaultTheme}
          currentPage={currentPage==='about'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('about')}>
          about
        </MobileButton>
        <MobileButton 
          defaultTheme={defaultTheme}
          currentPage={currentPage==='code'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('code')}>
          code
        </MobileButton>
        <MobileButton 
          defaultTheme={defaultTheme}
          currentPage={currentPage==='designs'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('designs')}>
          designs
        </MobileButton>
        <MobileButton 
          defaultTheme={defaultTheme}
          currentPage={currentPage==='contact'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('contact')}>
          contact
        </MobileButton>
      </ButtonContainer>
      <SocialContainer>
        <Social
          defaultTheme={defaultTheme}
          menuOpen={menuOpen}
          href='https://twitter.com/Dobre_Alexander'
          target='_blank' rel="noopener noreferrer">
          <Twitter />
        </Social>
        <Social
          defaultTheme={defaultTheme}
          menuOpen={menuOpen}
          href='https://www.linkedin.com/in/alexandru-dobre-492242143/'
          target='_blank' rel="noopener noreferrer">
          <LinkedIn />
        </Social>
        <Social
          defaultTheme={defaultTheme}
          menuOpen={menuOpen}
          href='https://github.com/Zerelt'
          target="_blank" rel="noopener noreferrer">
          <Github />
        </Social>
      </SocialContainer>
    </MobileMenuContainer>
  )
}

MobileMenu.propTypes = {
  defaultTheme: PropTypes.bool,
  currentPage: PropTypes.string,
  menuOpen: PropTypes.bool,
  handleMenu: PropTypes.func,
  handleNavClick: PropTypes.func,
  width: PropTypes.number,
  handleTheme: PropTypes.func
}

export default hot(module)(MobileMenu)