import { hot } from 'react-hot-loader'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Twitter, Github, LinkedIn } from 'assets/theme/social'
import { 
  MobileMenuContainer, 
  MobileMenuOverlay,
  MobileMenuInner,
  SocialOptions,
  ThemeOptions,
  PageOptions, 
  SeparationLine
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
    <MobileMenuContainer menuOpen={menuOpen}>
      <MobileMenuOverlay defaultTheme={defaultTheme} menuOpen={menuOpen} onClick={()=>handleMenu(false)} />
      <MobileMenuInner 
        defaultTheme={defaultTheme}
        menuOpen={menuOpen}>
        <SocialOptions
          className='option-1'
          defaultTheme={defaultTheme}
          menuOpen={menuOpen}
          href='https://twitter.com/Dobre_Alexander'
          target='_blank' rel="noopener noreferrer">
          <Twitter /> twitter
        </SocialOptions>
        <SocialOptions
          className='option-2'
          defaultTheme={defaultTheme}
          menuOpen={menuOpen}
          href='https://www.linkedin.com/in/alexandru-dobre-492242143/'
          target='_blank' rel="noopener noreferrer">
          <LinkedIn /> linkedIn
        </SocialOptions>
        <SocialOptions
          className='option-3'
          defaultTheme={defaultTheme}
          menuOpen={menuOpen}
          href='https://github.com/Zerelt'
          target="_blank" rel="noopener noreferrer">
          <Github /> github
        </SocialOptions>

        <SeparationLine />

        <ThemeOptions 
          className='option-4'
          defaultTheme={defaultTheme} onClick={()=>handleTheme(false)}>
          light
        </ThemeOptions>
        <ThemeOptions 
          className='option-5'
          defaultTheme={defaultTheme} onClick={()=>handleTheme(true)}>
          dark
        </ThemeOptions>

        <SeparationLine />

        <PageOptions 
          className='option-6'
          defaultTheme={defaultTheme}
          currentPage={currentPage==='home'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('home')}>
          home
        </PageOptions>
        <PageOptions 
          className='option-7'
          defaultTheme={defaultTheme}
          currentPage={currentPage==='about'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('about')}>
          about
        </PageOptions>
        <PageOptions 
          className='option-8'
          defaultTheme={defaultTheme}
          currentPage={currentPage==='code'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('code')}>
          code
        </PageOptions>
        <PageOptions 
          className='option-9'
          defaultTheme={defaultTheme}
          currentPage={currentPage==='designs'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('designs')}>
          designs
        </PageOptions>
        <PageOptions 
          className='option-10'
          defaultTheme={defaultTheme}
          currentPage={currentPage==='contact'}
          menuOpen={menuOpen}
          onClick={()=>handleButtonClick('contact')}>
          contact
        </PageOptions>
      </MobileMenuInner>
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