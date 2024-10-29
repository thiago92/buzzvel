//React
"use client";
import { useEffect, useRef } from 'react';

//css
import styles from './Powerful.module.css';

export default function Powerful() {

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
                    <div ref={titleRef} className={`${styles.services} ${styles.fadeLeft}`}>
                        <span className="span_title">System features</span>
                        <h3>Powerful features</h3>
                        <p className='text_h3'>
                            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.
                        </p>
                        <div className={styles.information}>
                            <div>
                                <div>
                                    <h4>Erat sit</h4>
                                    <p className='text_h4'>Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis.</p>
                                </div>
                                <div>
                                    <h4>Ullamcorper arcu</h4>
                                    <p className='text_h4'>Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4>Et pellentesque</h4>
                                    <p className='text_h4'>Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate.</p>
                                </div>
                                <div>
                                    <h4>Amet egestas</h4>
                                    <p className='text_h4'>Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.image}></div>
                </div>
            </div>
        </section>
    )
}