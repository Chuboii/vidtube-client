import img from '../../assets/dummy.jpeg'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import {Form, Input} from './SearchPage.style'
import { formatDistanceToNow } from 'date-fns'
import ThumbnailContainer from '../../components/thumbnail container/ThumbnailContainer'
import Thumbnail from '../../components/thumbnails/Thumbnail'
import SkeletonLoading from '../../components/skeleton/Skeleton'
import FooterMobile from '../../components/footer mobile/FooterMobile'

function SearchPage() {
    const location = useLocation()
    const searchData = useSelector((state) => state.search.searchData)
    const searchValue = useSelector((state) => state.search.searchValue)
    const query = location.search.split("=")[1]
    const dispatch = useDispatch()
    

  const changeValues = (e) => {
      dispatch({type:"GET_SEARCH_VALUE", payload:e.target.value})
    }
  

  const submitFormData = async (e) => {
    e.preventDefault()

      dispatch({type:'GET_SEARCH_DATA', payload:null})
            try {
          const data = await axios.get("http://localhost:8080/api/video/search", {
                      params: {
                        q: searchValue
                    }
          })
                   dispatch({type:'GET_SEARCH_DATA', payload:data.data})
              }
              catch (e) {
                dispatch({type:'ERROR', payload:e.response.data.message})
              }
  }
  
    return (
      <>
        <Form onSubmit={submitFormData}>
          <Input value={searchValue} onChange={changeValues}  placeholder='Search videos here...'/>
        </Form>

      <ThumbnailContainer>
          {
        searchData ? searchData.map(data => (
             <Thumbnail key={data.id} video={data} />
              ))  : <SkeletonLoading/>}
        </ThumbnailContainer>

        <FooterMobile/>
      </>
  )
}

export default SearchPage