import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import BandsCSS from "../Styling/Bands.module.css"
import img1 from "../Assets/gallery/bands1.jpeg";
import img2 from "../Assets/gallery/img3.webp";
import img3 from "../Assets/gallery/bands2.jpeg";
import img4 from "../Assets/gallery/img4.webp";
import img5 from "../Assets/gallery/bands1.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const Bands = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            Name:"Rock", Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione dicta at.", Image: img1
        },
        {
            Name:"Pop", Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione dicta at.", Image: img3
        },
        {
            Name:"Jazz", Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione dicta at.", Image: img3
        },
        {
            Name:"Classic", Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ratione dicta at.", Image: img4
        },
        {
            Name:"Hip-Hop", Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ad iusto repudiandae.", Image: img5
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <>
            <Navbar />
            <div className={BandsCSS.container}>
                <div className={BandsCSS.slide}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`${BandsCSS.item} ${
                                index === currentIndex ? BandsCSS.active : ''
                            }`}
                            style={{ backgroundImage: `url(${item.Image})` }}
                        >
                            <div className={BandsCSS.content}>
                                <div className={BandsCSS.name}>
                                    {item.Name}
                                </div>
                                <div className={BandsCSS.desc}>
                                    {item.Description}
                                </div>
                                <button>See More</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={BandsCSS.button}>
                    <button className={BandsCSS.prev} onClick={prevSlide}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button className={BandsCSS.next} onClick={nextSlide}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Bands;