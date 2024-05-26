import Container from "@mui/material/Container"
import ButtonToggleMode from "./components/ButtonToggleMode"

function App() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'pink' }}>
      <ButtonToggleMode />
    </Container>
  )
}

export default App
