import React , {useEffect} from 'react'
import video from '../../Assets/videos/video2.mp4'
import aeroplane from '../../Assets/images/plane2.png'


const Home = () => {
  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1>Create Ever Lasting Memories with Us</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} loop autoPlay muted className='video'></video>
        </div>

        <img src={aeroplane} alt="" className='plane'/>
      </div>

    </div>
  )
}

export default Home
