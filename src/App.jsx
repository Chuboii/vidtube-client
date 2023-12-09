import { ThemeProvider } from "styled-components"
import GlobalStyles from "./global style/GlobalStyle"
import RenderRoutes from "./routes/RenderRoutes"

const theme = {
  colors: {
    background: "rgba(0,0,0,.8)",
    color: "white"
  }
}


function App() {

  return (

    <ThemeProvider theme={theme}>

      <>
      <GlobalStyles/>
       <RenderRoutes/>
        </>
      </ThemeProvider>
  )
}

export default App
