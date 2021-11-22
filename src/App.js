/* eslint-disable react/react-in-jsx-scope */
import { Route, Switch, useLocation } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/Themes'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from './globalStyle'
import Main from './components/Main'
import AboutPage from './components/AboutPage'
import QualPage from './components/QualPage'
import SkillsPage from './components/SkillsPage'
import WorkPage from './components/WorkPage'
import SoundBar from './subComponents/SoundBar'

function App () {
  const location = useLocation()
  return <>

    <GlobalStyle />

    <ThemeProvider theme={lightTheme}>

    <SoundBar />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/qual' component={QualPage} />
          <Route exact path='/skills' component={SkillsPage} />
          <Route exact path='/work' component={WorkPage} />
        </Switch>
      </AnimatePresence>

    </ThemeProvider>

  </>
}

export default App
