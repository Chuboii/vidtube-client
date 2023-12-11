import {
  useNavigate
} from 'react-router-dom'
import {
  Container,
  Form,
  Wrapper,
  Label,
  Input,
  Button,
  Text
} from './EmailSignin.style'
import {
  useState
} from 'react'
import axios from 'axios'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import Loader from "../../components/loader/Loader"
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useForm
} from "react-hook-form"

function EmailSignin() {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
      mode: "onChange"
    })
  const navigate = useNavigate()
  /*const [details,
    setDetails] = useState({
      email: "",
      passkey: ""
    })*/
  const dispatch = useDispatch()
  const [isLoggedIn,
    setIsLoggedIn] = useState(false)

  const registerOptions = {
    email: {
      required: "You must provide an email",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      }
    },
    passkey: {
      required: "You must provide a password"
    }
  }

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
      if (data.email && data.passkey) {
        setIsLoggedIn(true)
        const user = await axios.post('https://vidtube-l48b.onrender.com/api/auth/signin', {
          email: data.email,
          passkey: data.passkey
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
      }
    }
    catch (e) {
      toast.error('Invalid credentials!', {
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



  return (
    <>
    {
      isLoggedIn && <Loader />
    } < Container >
    <Form onSubmit={handleSubmit(submitForm)}>
        <Wrapper>
          <Label htmlFor="email">Email</Label>
          <Input name="email"
      {...register("email", registerOptions.email)}
      />
      {errors.email && <span style={ { color: "red", fontSize: "13px",
        marginTop: '.3rem' }}>{errors.email.message}</span>}
              </Wrapper>

              <Wrapper>
          <Label htmlFor="password">Password</Label>
          <Input name="passkey"
      {...register("passkey", registerOptions.passkey)}
      />
            {errors.passkey && <span style={ { color: "red", fontSize: "13px",
        marginTop: '.3rem' }}>{errors.passkey.message}</span>}
              </Wrapper>

              <Button onClick={submitForm}>Sign in</Button>
          </Form>

    <Text onClick={() => navigate('/signin')}>Choose a different signin option</Text>

  </Container> < />
)
}

export default EmailSignin