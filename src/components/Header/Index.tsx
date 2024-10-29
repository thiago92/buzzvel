import Image from "next/image";

//css
import styles from "./Header.module.css";

//images
import img from "../../public/images/foto-header.jpeg";

export default function Header() {
    return (
        <section className={styles.background}>
            <header className="container">
                <nav className={styles.nav}>
                    <div className={styles.navbar}>
                        <div className={styles.navbarBrand}>
                            <a href="#">soller</a>
                        </div>
                        <div className={styles.navbarMenu}>
                            <ul>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Solutions</a></li>
                                <li><a href="#">Servoce</a></li>
                                <li><a href="#">Configure</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <ul>
                            <li className={styles.headsetLi}>
                                <div>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 16.59C2 16.8552 1.89464 17.1096 1.70711 17.2971C1.51957 17.4846 1.26522 17.59 1 17.59C0.734784 17.59 0.48043 17.4846 0.292893 17.2971C0.105357 17.1096 0 16.8552 0 16.59V10.5C0 4.977 4.477 0.5 10 0.5C15.523 0.5 20 4.977 20 10.5V13.586C20 13.8512 19.8946 14.1056 19.7071 14.2931C19.5196 14.4806 19.2652 14.586 19 14.586C18.7348 14.586 18.4804 14.4806 18.2929 14.2931C18.1054 14.1056 18 13.8512 18 13.586V10.5C18 8.37827 17.1571 6.34344 15.6569 4.84315C14.1566 3.34285 12.1217 2.5 10 2.5C7.87827 2.5 5.84344 3.34285 4.34315 4.84315C2.84285 6.34344 2 8.37827 2 10.5V16.59ZM2 10.5H4C4.53043 10.5 5.03914 10.7107 5.41421 11.0858C5.78929 11.4609 6 11.9696 6 12.5V17.5C6 18.0304 5.78929 18.5391 5.41421 18.9142C5.03914 19.2893 4.53043 19.5 4 19.5H2C1.46957 19.5 0.960859 19.2893 0.585786 18.9142C0.210714 18.5391 0 18.0304 0 17.5V12.5C0 11.9696 0.210714 11.4609 0.585786 11.0858C0.960859 10.7107 1.46957 10.5 2 10.5ZM2 12.5V17.5H4V12.5H2ZM16 10.5H18C18.5304 10.5 19.0391 10.7107 19.4142 11.0858C19.7893 11.4609 20 11.9696 20 12.5V17.5C20 18.0304 19.7893 18.5391 19.4142 18.9142C19.0391 19.2893 18.5304 19.5 18 19.5H16C15.4696 19.5 14.9609 19.2893 14.5858 18.9142C14.2107 18.5391 14 18.0304 14 17.5V12.5C14 11.9696 14.2107 11.4609 14.5858 11.0858C14.9609 10.7107 15.4696 10.5 16 10.5ZM16 12.5V17.5H18V12.5H16Z" fill="#0369A1"/>
                                    </svg>
                                </div>
                                <span>55 818 282</span>
                            </li>
                            <li>
                                <button className="btn_purple">
                                    Request a Quote
                                    <div className="arrow_right"></div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={`${styles.information} ${styles.fadeIn}` }>
                    <div>
                        <h2>
                            Get the Sun to Power Your Home
                        </h2>
                        <p className="text_h2">
                            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
                        </p>
                        <button className="btn_purple">
                            Request a Quote
                            <div className="arrow_right"></div>
                        </button>
                    </div>
                    <div className={styles.comment_profile}>
                        <p className="text_h4">
                            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”
                        </p>
                        <div className={styles.comment}>
                            <Image src={img} alt='coment'/>
                            <div>
                                <span>Rwanda Melflor</span>
                                <span>zerowaste.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
}