//React
"use client";
import {useState} from 'react';

//css
import styles from './All.module.css';

//image
import Image from 'next/image';
import arrowLeft from '../../public/images/button-arrow-left.png';
import arrowRight from '../../public/images/button-arrow-right.png';

import carouselItems from './data';

export default function All() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 5; 
    const itemsPerClick = .6332;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + itemsPerClick;
            const maxIndex = carouselItems.length - itemsToShow;
            return newIndex > maxIndex ? prevIndex : newIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - itemsPerClick;
            return newIndex < 0 ? prevIndex : newIndex;
        });
    };

    return (
        <section className={styles.background}>
            <div className="container">
                <div className={styles.responsive}>
                    <div className={`${styles.main}`}>
                        <div className={styles.top}>
                            <div>
                                <span className="span_title">Join other Sun harvesters</span>
                                <h3>Make something awesome</h3>
                                <p className='text_h3'>
                                    Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
                                </p>
                            </div>
                            <div>
                                <button className="btn_yellow">
                                    Request a Quote
                                    <div className="arrow_right"></div>
                                </button>
                            </div>
                        </div>
                        
                        <div className={styles.content}>
                            <div 
                                className={styles.carouselContainer} 
                                style={{ transform: `translateX(-${(currentIndex / itemsToShow) * 100}%)` }}
                            >
                                {carouselItems.map((item, index) => (
                                    <div key={index} className={styles.carouselItem}>
                                        <p className='text-h4'>{item.text}</p>
                                        <div className={styles.profile}>
                                            <Image src={item.src} alt={item.alt} />
                                            <div>
                                                <span>{item.name}</span>
                                                <span>{item.kWh}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.arrow}>
                            <div onClick={handlePrev}>
                                <Image src={arrowLeft} alt='arrow-left' />
                            </div>
                            <div onClick={handleNext}>
                                <Image src={arrowRight} alt='arrow-right' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}