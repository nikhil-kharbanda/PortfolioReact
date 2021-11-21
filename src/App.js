import { Route, Switch } from "react-router"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyle"


import Main from './components/Main'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectPage'
import SkillsPage from './components/SkillsPage'
import WorkPage from './components/WorkPage'

function App() {
  return <>


  <GlobalStyle />
    
    <ThemeProvider theme = {lightTheme}>

    <Switch>
      <Route exact path = '/' component={Main}/>
      <Route exact path = '/about' component={AboutPage}/>
      <Route exact path = '/project' component={ProjectsPage}/>
      <Route exact path = '/skills' component={SkillsPage}/>
      <Route exact path = '/work' component={WorkPage}/>
    </Switch>

    </ThemeProvider>

    </>
    
}

export default App