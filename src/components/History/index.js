import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import {Carousel} from '3d-react-carousal';

const History = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    let slides = [
        <a title="google" href="http://www.google.com"><img  src="https://picsum.photos/800/300/?random" alt="1" /></a>,
        <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
        <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
        <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
        <img  src="https://picsum.photos/800/304/?random" alt="5" />   ];

  return (
    <>
        <div className="container history-page">
                <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P','o','r','t','f','o','l','i','o']}
                        idx={15}
                    />
                    </h1>
                    <p>
                        Portfolio Web.
                    </p>
                   
                </div>
                <div className="container Carousel">
                    <Carousel className="img" slides={slides} autoplay={true} interval={10000}/>
                </div>

            </div> 
            <Loader type='pacman' />
            </>
  )
}

export default History