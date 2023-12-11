import { useNavigate } from 'react-router-dom'
import { Container, Form, Wrapper, Label, Input, Button, Text} from './EmailSignin.style'
import { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

// const axios = axiosBase.create({
//   baseURL: "http://localhost:8080/api/",
// });


function EmailSignin() {
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    email: "",
    passkey:""
  })
  const dispatch = useDispatch()


  const handleDetails = (e) => {
    setDetails(prev => {
      return {
        ...details,
        [e.target.name]:e.target.value
    }
  })
  }

  // https://vidtube-l48b.onrender.com/
  
  const submitForm = async () => {
    try {
      const user = await axios.post('https://vidtube-l48b.onrender.com/api/auth/signin', {
        email: details.email,
        passkey: details.passkey
      }, {
        withCredentials:true
      })
     
      dispatch({ type: "GET_USER_DATA", payload: user.data })
      navigate("/")
    }
    catch (e) {
      dispatch({ type:"ERROR", payload: e})
    }
  }



  return (
      <Container>
          <Form  onSubmit={(e)=> e.preventDefault()}>
        <Wrapper>
          <Label htmlFor="email">Email</Label>
          <Input name="email" value={ details.email} onChange={handleDetails} />
              </Wrapper>

              <Wrapper>
          <Label htmlFor="password">Password</Label>
          <Input  name="passkey" value={ details.passkey} onChange={handleDetails}/>
              </Wrapper>

              <Button onClick={submitForm}>Sign in</Button>
          </Form>

      <Text onClick={() => navigate('/signin')}>Choose a different signin option</Text>

    </Container>
  )
}

export default EmailSignin