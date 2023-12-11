import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useEffect
} from "react"
export default function AlertToaster( {
  msg
}) {

  useEffect(()=> {
    toast(msg)
  }, [])

  return(
    <>< />
  )
}