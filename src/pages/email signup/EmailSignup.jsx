import {
  useNavigate
} from 'react-router-dom'
import {
  Container,
  File,
  Avatar,
  Icon,
  Form,
  Wrapper,
  Label,
  Input,
  Button,
  Text
} from './EmailSignup.style'
import {
  useDispatch
} from 'react-redux'
import {
  useState
} from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios'
import {
  useForm
} from "react-hook-form"
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../../components/loader/Loader"
function EmailSignup() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
      mode: "onChange"
    })
  const [isLoggedIn,
    setIsLoggedIn] = useState(false)
  /*  const [details,
    setDetails] = useState({
      email: "",
      name: "",
      img: "",
      username: "",
      password: "",
      confirmPassword: ""
    })*/

  const registerOptions = {
    name: {
      required: "You must provide a name"
    },
    username: {
      required: "You must provide a username"
    },
    email: {
      required: "You must provide an email",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      }
    },
    password: {
      required: "You must provide a password"
    },
    confirmPassword: {
      required: "You must confirm your password"
    }
  }
  const [img,
    setImg] = useState('')
  const [loading,
    setLoading] = useState(false)
  const [fileTouched,
    setFileTouched] = useState(false)
  const dispatch = useDispatch()

  const handleDetails = (e) => {
    setDetails(prev => {
      return {
        ...details,
        [e.target.name]: e.target.value
      }
    })
  }

  const submitForm = async (data) => {
    try {
      if (data.name && data.username && data.email && data.password &&
        data.confirmPassword) {

        if (data.password === data.confirmPassword) {
          if (data.password.length >= 6) {
            if (img) {
              setIsLoggedIn(true)
              const user = await axios.post('"https://vidtube-l48b.onrender.com/api/auth/signup', {
                email: data.email,
                password: data.password,
                name: data.name,
                username: data.username,
                img: img
              }, {
                withCredentials: true
              })

              dispatch({
                type: "GET_USER_DATA", payload: user.data
              })
              setIsLoggedIn(false)
              toast.success('Sucesss!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              })

              setTimeout(()=> {
                navigate("/")
              }, 2000)
            } else {
              toast.error('Please select an image!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }
          } else {
            toast.error('Password must be more than six characters!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        } else {
          toast.error('Passwords does not match!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      }
    }
    catch (e) {
      setIsLoggedIn(false)
      dispatch({
        type: "ERROR", payload: e
      })
      toast.error('Email is already in use!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
      
      setLoading(false)
      setImg(imageLink.data.secure_url)
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <>
    {
      isLoggedIn && < Loader />
    } < ToastContainer theme = "colored" />
    <Container>
      <Form onSubmit={handleSubmit(submitForm)}>
      <Wrapper>
      <Label htmlFor="name">Name</Label>
      <Input name="name"
      {...register("name", registerOptions.name)} />
      {errors.name && <span style={ { color: "red", fontSize: "13px",
        marginTop: '.3rem' }}>{errors.name.message}</span>}
      </Wrapper>
      <Wrapper>
      <Label htmlFor="username">Username</Label>
      <Input name="username"
      {...register("username", registerOptions.username)} />
      {errors.username && <span style={ { color: "red", fontSize: "13px",
        marginTop: '.3rem' }}>{errors.username.message}</span>}
      </Wrapper>
      <Wrapper>
      <Label htmlFor="email">Email</Label>
      <Input name="email"
      {...register("email", registerOptions.email)} />
      {errors.email && <span style={ { color: "red", fontSize: "13px",
        marginTop: '.3rem' }}>{errors.email.message}</span>}
      </Wrapper>

      <Wrapper>
      <Label htmlFor="password">Password</Label>
      <Input name="password"
      {...register("password", registerOptions.password)} />
      {errors.password && <span style={ { color: "red", fontSize: "13px",
        marginTop: '.3rem' }}>{errors.password.message}</span>}
      </Wrapper>
      <Wrapper>
      <Label htmlFor="confirm-password">Confirm Password</Label>
      <Input name="confirmPassword"       {...register("confirmPassword",
        registerOptions.confirmPassword)} />
      {errors.confirmPassword && <span style={ { color: "red", fontSize: "13px",
        marginTop: '.3rem' }}>{errors.confirmPassword.message}</span>}
      </Wrapper>
      <Avatar>
      <Icon> <AddPhotoAlternateIcon sx={ { marginRight: ".2rem", fontSize: "40px" }} />
      {loading ? "uploading...": "Add avatar"}
      </Icon>
      <File onChange={extractImageFromFile} type='file' accept="image/*" />
              </Avatar>

              <Button onClick={submitForm}>Sign up</Button>
          </Form>
      <Text onClick={() => navigate('/signin')}>Choose a different signin option</Text>

    </Container> < />
  )
}

export default EmailSignup