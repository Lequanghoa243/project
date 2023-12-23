import React, { useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ReactStars from 'react-stars'
import { toast } from 'react-toastify'
import { addRating, getOneCourse } from '../../../Feature/course/courseSlice'
import { getOneUser } from '../../../Feature/user/userSlice'

function CourseRate() {
  const location = useLocation()
   const courseState = useSelector((state) => state?.course?.course)
   const userState = useSelector((state) => state?.auth?.customer)
  const getCourseId = location.pathname.split("/")[2]

  const dispatch = useDispatch()
  const [star,setStar] = useState(null)
  const [comment,setComment] = useState(null)
  const addRatingP = async () =>{
    if(star == null){
      toast.error("Please add star rating")
      return false
    } else if (comment == null){
      toast.error("Please write comment")
    } else {
        await dispatch(addRating({star:star,comment:comment,courseId:getCourseId}))
        await dispatch(getOneCourse(getCourseId))
        
    }
    return false
  }



    const [learncourse, setlearncourse] =useState (true);
      return (
    <div  className='reviews_container'>
        <h2 id='review' >Review Course</h2>
        <div className='reviews'>
        <div className='containerreviews'>
      <div className='reivewcontent'>
        <h4> Customer Reviews</h4>
        <div className='ratingstars'>
        <ReactStars
        count={5}
        value={courseState?.totalrating}
        edit ={false}
        size={24}
        color2={'#ffd700'} />
  <span> Bases on {courseState?.ratings?.length} Reviews</span>
  </div> 
  </div>
      <div className='reviewlink'>
      {
            learncourse &&(
                <div>
                <a className='createreview' href='/Login' >Write a Review</a>   
                </div>
            )
        }
      </div>
        </div>
        <div className='review-form'>
        <h4> Write a Review</h4>
                <div>
                <ReactStars
                count={5}
                value={0}
                edit ={true}
                size={24}
                onChange={(e)=>{
                  setStar(e)
                }}
               activeColor={'#ffd700'} />
                </div>
                <div> <textarea 
                    name=''
                    id=''
                    className='formcontrol'
                    rows="5"
                    placeholder='Comments'
                    onChange={(e)=>{
                      setComment(e.target.value)
                    }}
                    >
                      
                    </textarea>
                </div>
                <button onClick={addRatingP} className='btn' type="button">Submit</button>
                </div>
        <div className='learnerrating'>

          {
            courseState && courseState.ratings.map((item,index)=>{
              return(
                <>
                <div key={index} className='learnerreview'>
                <h3>{item?.postedby?.firstname} {item?.postedby?.lastname}</h3>
                <ReactStars
                count={5}
                value={item?.star}
                edit ={false}
                size={24}
                color2={'#ffd700'} />
                </div>
                <small className='contentreview'>
                {item?.comment}
                </small>
                </>
              )
            })
          }
        
        </div>
        </div>
        

    </div>
  )
}

export default CourseRate