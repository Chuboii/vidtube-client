import { useNavigate } from 'react-router-dom'
import {Container, Text, Button } from './ErrorPage.style'

function ErrorPage() {
    const navigate = useNavigate()

    const navigateToHome = () => navigate("/")


  return (
      <>
          <Container>
              <Text>ERROR 500</Text>
              <Text>Ooops! Something went wrong 😥</Text>
              <Button onClick={navigateToHome}>Go back to Home</Button>
      </Container>
      </>
  )
}

export default ErrorPage