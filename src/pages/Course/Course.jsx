/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlayCircle ,faAngleDoubleRight,faFileAlt,faFlag } from '@fortawesome/free-solid-svg-icons';

const Course = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const[course,setCourse] = useState([]);
    const[videoCourse,setVideoCourse] = useState("");
    const[isQuizTime,setIsQuizTime] = useState(false);
    const[quizPosition,setQuizPosition] = useState(0);
    const[nowPlaying,setNowPlaying] = useState(-1);
    const apiUrl = "https://61d3c74ab4c10c001712ba8e.mockapi.io/mycourses"
    const retrieveUser = async () => {
        const response = await axios.get(apiUrl);
        return response.data
    }
    useEffect(() => {
        const getUser = async () => {
            try {
                setIsLoading(true)
                const data = await retrieveUser();
                if (data) {
                    setIsLoading(false);
                    setCourse(data)
                }
            } catch(err) {
                setIsLoading(false)
                setIsError(true)
            }
        }
        getUser()
    }, [])
    //Alamat
    // <Route path="/mycourses/:my_course_id" element={<PermanentDrawer />} />
    const howManySections = [1,1];
    // Test for how much the video in the section will be
    const howManyVideos = [1,1,1,1];
    //courseData
    const data = course[0];
    

    
    let params = useParams();
    return(
        <>
        {isLoading === true ? "Loading bro" : isError === true ? "Error bro" :

        <div className='  min-h-screen bg-neutral-content'>
            {/* Navbar */}
            <div className='bg-neutral px-8 py-4 flex items-center'>
                <div className='flex items-center grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 cursor-pointer text-primary'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-current'>
                            <FontAwesomeIcon icon = {faArrowLeft} className='text-neutral text-xl '/>
                    </div>
                    <div className=''>
                        <p className='text-current text-sm ml-2'>Back to home</p>
                    </div>
                </div>
                <div className="divider divider-vertical  before:bg-base-100 after:bg-base-100  grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100"></div> 
               <h2 className=' text-base-100 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>{data?.name}</h2>

            </div>
            {/* Container For The Content */}
            <div className=' mx-auto px-8 text-base-100 py-4 flex'>
                {/* Video Content */}
                <div className='basis-8/12 relative course-video'>
                    {/* Logic For displaying what content should be appear */}
                    {isQuizTime === true ? 
                        <div className=''>
                            {data?.chapter[quizPosition].quiz[0].exercise.map((elm,idx) => {
                                return(
                                 <div key = {elm.id} className=' w-full '>
                                     <div className='w-full p-4 bg-neutral rounded-lg mb-3'>
                                         <p className='font-sm text-base-300 mb-1'>{`Quiz Question ${idx+1} of ${data?.chapter[quizPosition].quiz[0].exercise.length}`}</p>
                                        <p className='font-bold'>{`${elm.question}`}</p>
                                     </div>
                                    {elm.answer.map((elm) => {
                                        return(
                                            <p key={elm.id}>{`${elm.answer}. ${elm.name}`}</p>
                                        )
                                    })}
                                 </div>
                                )
                            })}
                           
                            <p className='text-base-100'>Lagi Quiz</p>
                        </div>
                        :
                        <iframe width="100%" height="500" src={videoCourse} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                    {/* Logic For Next Video Button */}
                    {isQuizTime == false ? 
                    <div onClick = {() => {
                        const currLessons =  data?.chapter[quizPosition].lessons
                        let nav = ""
                        console.log(currLessons.length)
                        console.log(nowPlaying)

                        if (Number(nowPlaying)+1 >= currLessons.length ){
                            setIsQuizTime(true)
                            // setNowPlaying(0)
                            // nav = data?.chapter[quizPosition].lessons[0].video
                            // setVideoCourse(nav)


                        } else {
                            nav = data?.chapter[quizPosition].lessons[Number(nowPlaying)+1].video

                            setVideoCourse(nav)
                            setNowPlaying((curr) => curr+1)


                        }

                        console.log("end "+nowPlaying)
                    }} className=' active:translate-y-1 opacity-0 absolute transition-all next-video bg-primary top-1/2 -right-10 py-3 px-2 cursor-pointer text-neutral-content grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>
                            <p className='font-bold'>Next Lesson</p>
                    </div> 
                    
                    :""}
                </div>
                {/* Container For The Sidebar */}
                <div className='basis-4/12 px-4 flex-grow'>
                    {/* Sidebar */}
                    <div className='bg-neutral flex-col h-full rounded-lg p-4 '>
                        {/* Header */}
                        <div className='flex items-center bg-primary p-2 rounded-lg grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>
                            <FontAwesomeIcon icon = {faAngleDoubleRight} className='text-4xl text-neutral-content mr-2 ' />
                            <p className='text-neutral-content font-bold text-xl w-full text-center -ml-4'>Course Content</p>
                        </div>
                        <div className='flex justify-center my-4'>
                            <a href = "#" className='text-xs text-base-300 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100 '>Are you have a problem? <span className='text-primary underline decoration-solid'>Request Consultation</span></a>
                        </div>
                        {/* Card Section Container*/}
                        <div className='rounded-lg my-3'>
                            {/* Collapse Container */}
                            {data?.chapter.map((elm,idxSection) => {
                                return(
                                    <div key = {elm.id}className="collapse w-96 my-4 border rounded-box border-base-300 hover:border-primary collapse-arrow">
                                        {/* This input purpose is,if the arrow is clicked,the div parent will expand */}
                                        <input type="checkbox"/> 
                                        <div className="collapse-title">
                                            <p className='font-bold'>{elm.name}</p>
                                            <p className='text-sm'>{elm.lessons.length} Videos</p>
                                        </div>
                                        <div className="collapse-content"> 
                                            {/* The First Collapse Content Is Always The Resource Of The Section */}
                                            <a href = {elm.ppt} target="_blank" rel='noreferrer' title = "Download The Resource For This Section"className=' p-1 border border-primary my-1 inline-block  grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100'>
                                                <FontAwesomeIcon icon={faFileAlt} className='mx-1'/>
                                                <span className='mx-1' >Resources</span>
                                            </a>
                                            {/* Card For Refrence To The Video */}
                                            {elm.lessons.map((elm,idx) => {
                                                return(
                                                    <div key = {elm.id} className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
                                                        <div className="form-control">
                                                            <div className="cursor-pointer p-2 flex items-center justify-start">
                                                                <FontAwesomeIcon icon={faPlayCircle} className='text-xl mr-4'></FontAwesomeIcon>
                                                                {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                                                                <span onClick={() => {
                                                                    setVideoCourse(elm.video)
                                                                    setIsQuizTime(false)
                                                                    setNowPlaying(idx)
                                                                    setQuizPosition(idxSection)

                                                                }} className="label-text text-primary font-medium">{elm.name}</span> 
                                                                <input type="checkbox" className="checkbox border-primary ml-auto"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            
                                            {/* End Of Card For Refrence To The Video */}
                                            {/* Quiz */}
                                            <div className="p-2 card-bordered rounded-lg mt-4 grayscale opacity-70 hover:grayscale-0 transition-all hover:opacity-100">
                                                <div className="form-control">
                                                    <div className="cursor-pointer p-2 flex items-center justify-start">
                                                        <FontAwesomeIcon icon={faFlag} className='text-xl mr-4'></FontAwesomeIcon>
                                                        {/* To Do,Onclick function on this span element,so if the element is clicked it will go to video url */}
                                                        <span onClick={() => {
                                                            setIsQuizTime(true)
                                                            setQuizPosition(idxSection)
                                                        } } className="label-text text-primary font-medium">Quiz | {elm.quiz[0].name} </span> 
                                                        <input type="checkbox" className="checkbox border-primary ml-auto"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                )
                            })}                                
                                {/* End Of Collapse Container */}
                        </div>
                        {/* End Of Card Section Container*/}
                    </div>
                    {/* End Of Sidebar */}
                </div>
                {/* End Of Sidebar Container */}
            </div>
            {/* End Of Container For The Content */}
        </div>
        }
        </>
    )
}

export default Course