import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-cbx';
import smoothscroll from 'smoothscroll-polyfill';
import SideBar from 'components/SideElements/SideBar';
import Home from 'components/Home';
import About from 'components/About';
import Designs from 'components/Designs';
import Code from 'components/Code';
import Contact from 'components/Contact';
import LightOrDark from 'components/LightOrDark'
import MobileMenu from 'components/SideElements/MobileMenu'
import MenuButton from 'components/SideElements/MenuButton'

import COLORS from 'assets/theme/colors';
import {
  GlobalStyles,
  Main
} from './styles'

/* eslint-disable */
// import resume file so it can be viewed on the web
// this is viewed as a separate page on the /Pdfs url
import AlexDobreResume from 'assets/AlexDobre-Resume.pdf' 
import AmurLeopard from 'assets/DesignFiles/SonyRedesign-1080px.pdf' 
import SonyRedesign from 'assets/DesignFiles/AmurLeopard-1080px.pdf' 
/* eslint-enable */

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultTheme: false, // true = black
      currentPage: '',

      height: window.innerHeight,
      width: window.innerWidth,

      menuOpen: false,

      infoOneTop: null,
      projectOneTop: null,
      projectTwoTop: null,
      projectThreeTop: null,
      quote: null,
      quoteDesign: null,

      designTextTop: null,
      designProjectOneTop: null,
      designProjectTwoTop: null,
      designProjectThreeTop: null,

      contactHeadlineTop: null,
      nameFieldTop: null,
      emailFieldTop: null,
      messageFieldTop: null
    }


    // this way of using refs exists too
    this.setInfoRef = this.setInfoOneRef
  }

  
  componentDidMount() {
    smoothscroll.polyfill();

    let bgColor = ''
    const { defaultTheme } = this.state
    const storedTheme = localStorage.getItem('defaultTheme')

    if(storedTheme) {
      this.setState({
        defaultTheme: JSON.parse(storedTheme)
      },()=>{
        bgColor = JSON.parse(storedTheme) ? COLORS.DARKBLACK : COLORS.WHITE;
        document.body.style.backgroundColor=bgColor
        // add transition here, to avoid seeing a background
        // flash effect when the saved theme is Dark
        setTimeout(()=>{
          document.body.style.transition='background-color .16s ease-out'
        },300)
      })
    } else {
      bgColor = defaultTheme ? COLORS.DARKBLACK : COLORS.WHITE;
      document.body.style.backgroundColor=bgColor
      // add transition here, since it's not added in the app style.js, 
      // to have a nice effect when the user decides to switch themes
      setTimeout(()=>{
        document.body.style.transition='background-color .16s ease-out'
      },300)
    }

    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    
    
    this.handleSidebar()
  }
    
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('scroll', this.handleScroll)
  }
  
  setInfoOneRef=(el) => {
    this.infoOne = el;
  }

  handleTheme = (status) => {
    const { defaultTheme } = this.state
    localStorage.setItem('defaultTheme', status)
    if (status!==defaultTheme) {
      this.setState({ defaultTheme: status },()=>{
        const bgColor = status===true ? COLORS.DARKBLACK : COLORS.WHITE;
        document.body.style.backgroundColor=bgColor
      })
    }
  }

  handleMenu =(x) => {
    this.setState({ menuOpen: x })
  }
  
  handleResize = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }
  
  handleScroll = () => {
    const infoOneTopValue = this.infoOne.getBoundingClientRect().top

    const projectOneTop = this.codeSection.children[0].getBoundingClientRect().top
    const projectTwoTop = this.codeSection.children[1].getBoundingClientRect().top
    const projectThreeTop = this.codeSection.children[2].getBoundingClientRect().top
    const quote = this.codeSection.children[3].getBoundingClientRect().top
    
    const designTextTop = this.designsSection.children[0].children[0].getBoundingClientRect().top
    const designProjectOneTop = this.designsSection.children[1].children[0].getBoundingClientRect().top
    const designProjectTwoTop = this.designsSection.children[1].children[1].getBoundingClientRect().top
    const designProjectThreeTop = this.designsSection.children[1].children[2].getBoundingClientRect().top
    const quoteDesign = this.designsSection.children[2].getBoundingClientRect().top

    const contactHeadlineTop = this.contactSection.children[0].getBoundingClientRect().top
    const nameFieldTop = this.contactSection.children[1].children[1].children[0].children[0].getBoundingClientRect().top
    const emailFieldTop = this.contactSection.children[1].children[1].children[0].children[1].getBoundingClientRect().top
    const messageFieldTop = this.contactSection.children[1].children[1].children[1].getBoundingClientRect().top
    
    this.setState({
      infoOneTop: infoOneTopValue,
      projectOneTop,
      projectTwoTop,
      projectThreeTop,
      quote,
      designTextTop,
      designProjectOneTop,
      designProjectTwoTop,
      designProjectThreeTop,
      quoteDesign,
      contactHeadlineTop,
      nameFieldTop,
      emailFieldTop,
      messageFieldTop
    })

    this.handleSidebar()
  }

  handleSidebar = () =>{
    const { height,width } = this.state
    const lastBreakpoint = width>=992 ? 200 : 148
    const infoOneTopValue = this.infoOne.getBoundingClientRect().top
    const projectOneTop = this.codeSection.children[0].getBoundingClientRect().top
    const designTextTop = this.designsSection.children[0].children[0].getBoundingClientRect().top
    const contactHeadlineTop = this.contactSection.children[0].getBoundingClientRect().top

    if(infoOneTopValue>height*.75) {
      this.setState({
        currentPage: 'home'
      })
    }
    if(infoOneTopValue<=(height*.75) && projectOneTop>height*.75 ) {
      this.setState({
        currentPage: 'about'
      })
    } 
    if (projectOneTop<=(height*.75) && designTextTop>height*.75) {
      this.setState({
        currentPage: 'code'
      })
    } 
    if (designTextTop<=(height*.75) && contactHeadlineTop>height - lastBreakpoint) {
      this.setState({
        currentPage: 'designs'
      })
    } 
    if(contactHeadlineTop<=height - lastBreakpoint) {
      this.setState({
        currentPage: 'contact'
      })
    } 

  }

  handleNavClick=(x) => {
    const home = this.homeSection
    const about = this.aboutSection
    const code = this.codeSection
    const designs = this.designsSection
    const contact = this.contactSection
    if (x==='home') {home.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='about') {about.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='code') {code.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='designs') {designs.scrollIntoView({ block: 'start', behavior: 'smooth' });}
    if (x==='contact') {contact.scrollIntoView({ block: 'start', behavior: 'smooth' });}
  }

  render() {
    
    const {
      infoOneTop, height, width,
      defaultTheme, currentPage, menuOpen,
      projectOneTop, projectTwoTop, projectThreeTop, quote, 
      designTextTop, designProjectOneTop, designProjectTwoTop, designProjectThreeTop, quoteDesign,
      contactHeadlineTop, nameFieldTop, emailFieldTop, messageFieldTop
    } = this.state
      return (
        <Scrollbars
          style={{ marginBottom: '-30px' }}
          onScroll={this.handleScroll}
          renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
          renderTrackVertical={props => <div {...props} className="track-vertical" />}>
          <Main defaultTheme={defaultTheme} menuOpen={menuOpen}>
            <SideBar 
              defaultTheme={defaultTheme}
              currentPage={currentPage} 
              handleNavClick={this.handleNavClick} 
            />
            <MenuButton 
              menuOpen={menuOpen}
              handleMenu={this.handleMenu} 
            />
            <MobileMenu 
              defaultTheme={defaultTheme}
              currentPage={currentPage} 
              menuOpen={menuOpen} 
              handleMenu={this.handleMenu} 
              width={width}
              handleNavClick={this.handleNavClick} 
              handleTheme={this.handleTheme}
            />
            <LightOrDark 
              defaultTheme={defaultTheme}
              handleTheme={this.handleTheme}
            />
            <Home 
              homeRef={el => {this.homeSection = el}}
              handleNavClick={this.handleNavClick}
              defaultTheme={defaultTheme} 
              height={height}
            />
            <About 
              defaultTheme={defaultTheme}
              infoOneTop={infoOneTop}
              height={height}
              aboutRef={el => {this.aboutSection = el}}
              setInfoOneRef={this.setInfoRef} 
            />
            <Code 
              codeRef={el => {this.codeSection = el}}
              height={height}
              projectOneTop={projectOneTop}
              projectTwoTop={projectTwoTop}
              projectThreeTop={projectThreeTop}
              quote={quote}
              defaultTheme={defaultTheme} 
            />
            <Designs 
              designsRef={el => {this.designsSection = el}}
              height={height}
              defaultTheme={defaultTheme} 
              designTextTop={designTextTop}
              designProjectOneTop={designProjectOneTop}
              designProjectTwoTop={designProjectTwoTop}
              designProjectThreeTop={designProjectThreeTop}
              quoteDesign={quoteDesign}
            />
            <Contact 
              defaultTheme={defaultTheme}
              contactRef={el => {this.contactSection = el}}
              height={height}
              contactHeadlineTop={contactHeadlineTop}
              nameFieldTop={nameFieldTop}
              emailFieldTop={emailFieldTop}
              messageFieldTop={messageFieldTop} 
            />
          </Main>
          <GlobalStyles defaultTheme={defaultTheme} />
        </Scrollbars>
        )
      }
}

export default App