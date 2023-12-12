import {
  useEffect,
  useState,
  useRef
} from "react";
import {
  Container,
  Icon,
  H2,
  Text,
  Span,
  Wrapper,
  WrapVideo,
  WrapImage,
  Input,
  SpanImage,
  InputImage,
  Textarea,
  Button,
  Box,
  Tag,
} from "./MobileVideoUpload.style";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  useDispatch,
  useSelector
} from "react-redux";
import DarkBg from "../dark bg/DarkBg";
import axios from "axios";
import {
  useNavigate
} from "react-router-dom";
import {
  ToastContainer,
  toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../loader/Loader";

const axiosBase = axios.create({
  baseURL: "https://vidtube-l48b.onrender.com/api/",
});

function MobileVideoUpload( {
  videoFile
}) {
  const [tags,
    setTags] = useState([]);
  const [values,
    setValues] = useState({
      titleValue: "",
      descriptionValue: "",
      tagsValue: "",
    });
  const [imageUrl,
    setImageUrl] = useState("");
  const [videoUrl,
    setVideoUrl] = useState("");
  const [valid,
    setValid] = useState(false);
  const tagInputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isTriggeredVideo,
    setIsTriggeredVideo] = useState(false);
  const [isTriggeredImage,
    setIsTriggeredImage] = useState(false);
  const [percentImage,
    setPercentImage] = useState(0);
  const [percentVideo,
    setPercentVideo] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  
  useEffect(() => {
    const tagInput = tagInputRef.current;
  
    function handleInputChange(e) {
      const tagValue = e.target.value.trim();
  
      if (tagValue.endsWith(",")) {
        e.preventDefault();
  
        if (tagValue.length > 1) {
          setTags((prev) => [...prev, tagValue.slice(0, -1)]);
          tagInput.value = ""; // Clear the input field
        }
      }
    }
  
    tagInput.addEventListener("input", handleInputChange);
  
    return () => {
      tagInput.removeEventListener("input", handleInputChange);
    };
  }, [tags]);
  

  useEffect(() => {
    if (
      values.titleValue &&
      tags &&
      values.descriptionValue &&
      imageUrl &&
      videoUrl
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  },
    [values.titleValue,
      tags,
      values.descriptionValue,
      valid]);

  const changeValue = (e) => {
    const value = e.target.value;

    setValues(() => {
      return {
        ...values,
        [e.target.name]: value
      };
    });
  };

  const removeTag = (idx) => {
    setTags((prev) => {
      const filtered = prev.filter((el, id) => idx !== id);
      return filtered;
    });
  };

  const removeVideoComponent = () => {
    dispatch({
      type: "TOGGLE_MOBILE_VIDEO_UPLOAD",
      payload: false
    });
  }

  useEffect(() => {
    const uploadAndGetVideoUrl = async () => {
      try {
        setIsTriggeredVideo(true);
        const preset_key = "vidtube files";
        const cloud_name = "dcgirmxbm";

        setInterval(() => {
          setPercentVideo((prev) => {
            if (prev < 99) {
              return prev + 1;
            } else {
              return prev;
            }
          });
        }, 30);

        const videoFormData = new FormData();
        videoFormData.append("file", videoFile);
        videoFormData.append("upload_preset", preset_key);

        const videoLink = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloud_name}/video/upload`,
          videoFormData
        );

        setVideoUrl(videoLink.data.secure_url);

        setPercentVideo(100);
      } catch (e) {
        if (e.message === "timeout exceeded"  || e.message === "Network Error") {
          setIsTriggeredVideo(false)
          toast.error('Connection timeout! Check your internet connection!', {
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

    uploadAndGetVideoUrl()
  }, [])

  const collectImageFileUrl = async (e) => {
    try {
      setIsTriggeredImage(true);

      const preset_key = "vidtube files";
      const cloud_name = "dcgirmxbm";
      const file = e.target.files[0];

      setInterval(() => {
        setPercentImage((prev) => {
          if (prev < 99) {
            return prev + 1;
          } else {
            return prev;
          }
        });
      }, 30);

      const imageFormData = new FormData();
      imageFormData.append("file", file);
      imageFormData.append("upload_preset", preset_key);

      const imageLink = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        imageFormData
      );

      setImageUrl(imageLink.data.secure_url);

      setPercentImage(100);
    } catch (e) {
      if (e.message === "timeout exceeded"  || e.message === "Network Error") {
        setIsTriggeredImage(false)
        toast.error('Connection timeout! Check your internet connection!', {
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
  };

  const uploadData = async (e) => {
    try {
      if (values.titleValue && tags && values.descriptionValue && videoUrl && imageUrl) {
        setIsLoaded(true)
        const res = await axiosBase.post(
          "video",
          {
            title: values.titleValue,
            desc: values.descriptionValue,
            thumbnail: imageUrl,
            videoUrl: videoUrl,
            tags: tags,
          },
          {
            withCredentials: true,
          }
        );
          setIsLoaded(false)
        navigate(`/watch/${res.data._id}/${res.data.userId}`);
        dispatch({
          type: "TOGGLE_VIDEO_COMP", payload: true
        });
      } else {
        toast.error('Connection timeout!', {
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
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isLoaded && <Loader />}
      <ToastContainer/>
    <DarkBg />
    <Container>
        <Icon onClick={removeVideoComponent}>
          <CloseOutlinedIcon />{" "}
        </Icon>
        <H2>Upload a new video</H2>

        <Wrapper>
          <Text>Video:</Text>

          <WrapVideo>
            <Input
      type="file"
      d={isTriggeredVideo ? "none": "block"}
      accept="video/*"
      />
            <Span d={isTriggeredVideo ? "block": "none"}>
              Uploading {percentVideo}%
            </Span>
          </WrapVideo>
        </Wrapper>

        <Wrapper>
          <Input
      name="titleValue"
      onChange={changeValue}
      value={values.titleValue}
      type="text"
      placeholder="Video title"
      />
        </Wrapper>

        <Wrapper>
          <Textarea
      name="descriptionValue"
      onChange={changeValue}
      value={values.descriptionValue}
      placeholder="Description"
      />
        </Wrapper>

        <Wrapper>
          <Box>
            {tags
      ? tags.map((el, idx) => (
        <Tag key={idx}>
                    {el}{" "}
                    <CloseOutlinedIcon
          onClick={() => {
            removeTag(idx);
          }}
          sx={ { fontSize: "15px", marginLeft: ".5rem" }}
          />{" "}
                  </Tag>
      )): ""}
          </Box>
          <Textarea
      ref={tagInputRef}
      name="tagsValue"
      onChange={changeValue}
      className="tag-input"
      value={values.tagsValue}
      placeholder="Seperate the tags with commas"
      />
        </Wrapper>

        <Wrapper>
          <Text>Thumbnail:</Text>
          <WrapImage>
            <InputImage
        onChange={collectImageFileUrl}
        d={isTriggeredImage ? "none": "block"}
        type="file"
        accept="image/*"
        />
            <SpanImage d={isTriggeredImage ? "block": "none"}>
              Uploading {percentImage}%
            </SpanImage>
          </WrapImage>
        </Wrapper>

        <Button onClick={uploadData}>Upload</Button>
      </Container>
    </>
  );
}

export default MobileVideoUpload;