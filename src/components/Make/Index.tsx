//React
"use client";
import { useEffect, useRef } from 'react';

//css
import styles from './Make.module.css';

//img
import Image from 'next/image';
import computer from '../../public/images/computer.png'

export default function Make() {

    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.25 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <section className={styles.background}>
            <div className='container'>
                <div className={styles.responsive}>
                    <div ref={titleRef} className={`${styles.top} ${styles.fadeIn}`}>
                        <div className={styles.title}>
                            <span className='span_title'>Get the Sun to power your home</span>
                            <h3>All the power that you need for your house is now available</h3>
                        </div>
                        <div className={styles.button}>
                            <button className="btn_yellow">
                                Request a Quote
                                <div className="arrow_right"></div>
                            </button>
                            <p className='text_h4'>Egestas fringilla aliquam leo</p>
                        </div>
                    </div>
                </div>
                <div className={styles.img}>
                    <Image src={computer} alt="Computer"/>
                </div>
            </div>
        </section>
    );
}