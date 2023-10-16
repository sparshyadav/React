// import './components/photo.css';
import image1 from '../assets/Photo 1.jpg'
import image2 from '../assets/Photo 2.jpg'
import image3 from '../assets/Photo 3.jpg'
import image4 from '../assets/Photo 4.jpg'
import image5 from '../assets/Photo 5.jpg'
import image6 from '../assets/Photo 6.jpg'
import image7 from '../assets/Photo 7.jpg'
import image8 from '../assets/Photo 8.jpg'
import image9 from '../assets/Photo 9.heic'
import './photo.css';

export default function Photo(){
    return(
        <div className='container'>
            <div className='photo-box'>
            <img src={image1} id="p1" alt="Image Not Found"></img>
            </div>

            <div className='photo-box'>
            <img src={image2} alt="Image Not Found"></img>
            </div>

            <div className='photo-box'>
            <img src={image3} alt="Image Not Found"></img>
            </div>

            <div className='photo-box'>
            <img src={image4} alt="Image Not Found"></img>
            </div>
            <div className='photo-box'>
            <img src={image5} alt="Image Not Found"></img>
            </div>

            <div className='photo-box'>
            <img src={image6} alt="Image Not Found"></img>
            </div>

            <div className='photo-box'>
            <img src={image7} alt="Image Not Found"></img>
            </div>

            <div className='photo-box'>
            <img src={image8} alt="Image Not Found"></img>
            </div>

            <div className='photo-box'>
            <img src={image9} alt="Image Not Found"></img>
            </div>
        </div>
    )
}