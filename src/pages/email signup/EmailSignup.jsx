import { useNavigate } from 'react-router-dom'
import { Container, File, Avatar, Icon, Form, Wrapper, Label, Input, Button, Text} from './EmailSignup.style'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios'


function EmailSignup() {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        email: "",
        name: "",
        img: "",
        username:"",
        password: "",
        confirmPassword:""
    })
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [fileTouched, setFileTouched] = useState(false)
    const dispatch = useDispatch()
    
    const handleDetails = (e) => {
        setDetails(prev => {
            return {
              ...details,
              [e.target.name]:e.target.value
          }
        })   
    }

    const submitForm = async () => {
        try {
             
            console.log(img, details.email, details.password, details.username, details.name)
            const user = await axios.post('"https://vidtube-l48b.onrender.com/api/auth/signup', {
                email: details.email,
                password: details.password,
                name: details.name,
                username: details.username,
                img: img
            }, {
              withCredentials:true
            })
           
            dispatch({ type: "GET_USER_DATA", payload: user.data })
            navigate("/"    )
          }
          catch (e) {
            dispatch({ type:"ERROR", payload: e})
          }
    }

    const extractImageFromFile = async (e) => {
        try {
            setFileTouched(true)
            setLoading(true)
            const preset_key = 'vidtube files'
            const cloud_name = 'dcgirmxbm'

            const avatarData = new FormData()
            avatarData.append("file", e.target.files[0])
            avatarData.append("upload_preset", preset_key)

            const imageLink = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, avatarData)
            console.log(imageLink);
            setLoading(false)
            setImg(imageLink.data.secure_url)
        }
        catch (e) {
            console.log(e)
        }
  }

  return (
      <Container>
          <Form onSubmit={(e) => e.preventDefault()}>
              
              
          <Wrapper>
          <Label htmlFor="name">Name</Label>
          <Input name="name" value={details.name} onChange={handleDetails}/>
              </Wrapper>

              
              <Wrapper>
          <Label htmlFor="username">Username</Label>
          <Input name="username" value={details.username} onChange={handleDetails}/>
              </Wrapper>
              <Wrapper>
                  
          <Label htmlFor="email">Email</Label>
          <Input name="email" value={details.email} onChange={handleDetails}/>
              </Wrapper>

              <Wrapper>
          <Label htmlFor="password">Password</Label>
          <Input name="password" value={details.password} onChange={handleDetails}/>
              </Wrapper>

              
              <Wrapper>
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input name="confirmPassword" value={details.confirmPassword} onChange={handleDetails}/>
              </Wrapper>

                            
              <Avatar>
                  <Icon> <AddPhotoAlternateIcon sx={{ marginRight: ".2rem", fontSize: "40px" }} />
                      
                      {loading ? "uploading..." : "Add avatar"}
                  </Icon>
                  <File onChange={extractImageFromFile} type='file' accept="image/*"/>
              </Avatar>

              <Button onClick={submitForm}>Sign up</Button>
          </Form>

          
      <Text onClick={() => navigate('/signin')}>Choose a different signin option</Text>

    </Container>
  )
}

export default EmailSignup