//React
"use client";
import { useEffect, useRef } from 'react';

//css
import styles from './Services.module.css';

export default function Services() {

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
                <div className={styles.main}>
                    <div className={styles.image}></div>
                    <div ref={titleRef} className={`${styles.services} ${styles.fadeRight}`}>
                        <span className="span_title">Services</span>
                        <h3>Personalized services</h3>
                        <p className='text_h3'>
                            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
                        </p>
                        <div className={styles.information}>
                            <div>
                                <div>
                                    <h4>Et mauris</h4>
                                    <p className='text_h4'>Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.</p>
                                </div>
                                <div>
                                    <h4>Imperdiet pellentesque</h4>
                                    <p className='text_h4'>Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>Eget sit</h4>
                                    <p className='text_h4'>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
                                </div>
                                <div>
                                    <h4>Non libero</h4>
                                    <p className='text_h4'>Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}