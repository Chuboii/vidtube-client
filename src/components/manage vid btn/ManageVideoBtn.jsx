import "./ManageVideoBtn.style"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Container, Button } from "../manage vid btn/ManageVideoBtn.style"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ManageVideoBtn(){

  const navigate = useNavigate()
  

  return (
    <>
    <Container>
    <Button onClick={() => navigate("/manage/videos")}>
          Manage videos
        </Button>

  <Button>
          Customize channel
        </Button>
        
        


    </Container>
    </>
    )
}