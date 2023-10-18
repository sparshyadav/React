import Image from './image'
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
                <Image src={image1}/>
            </div>

            <div className='photo-box'>
                <Image src={image2}/>
            </div>

            <div className='photo-box'>
                <Image src={image3}/>
            </div>

            <div className='photo-box'>
                <Image src={image4}/>
            </div>

            <div className='photo-box'>
                <Image src={image5}/>
            </div>

            <div className='photo-box'>
                <Image src={image6}/>
            </div>

            <div className='photo-box'>
                <Image src={image7}/>
            </div>

            <div className='photo-box'>
                <Image src={image8}/>
            </div>

            <div className='photo-box'>
                <Image src={image9}/>
            </div>
        </div>
    )
}