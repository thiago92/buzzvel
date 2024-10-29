//React
"use client";
import { useEffect, useRef } from 'react';

//css
import styles from './Pick.module.css'

//image
import Image from 'next/image'
import img from '../../public/images/img-section-pick.png'

export default function Pick() {
 
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
            <div className="container">
                <div ref={titleRef} className={`${styles.title} ${styles.fadeIn}`}>
                    <span className="span_title">No more waste</span>
                    <h3>Pick the Sun</h3>
                    <p className='text_h3'>
                        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
                    </p>
                    <Image src={img} alt='image' />
                </div>
            </div>
        </section>
    );
}