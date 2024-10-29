//css
import styles from './Footer.module.css';

//img
import Image from 'next/image';
import logo from '../../public/images/logo.png'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.div_footer}>
                <div className={styles.div_footer_1}>
                    <Image src={logo} alt="logo"/>
                </div>
                <div className={styles.div_footer_2}>
                    <p>@ 2023 Soller, Inc. All rights reserved.</p>
                </div>
                <div className={styles.div_footer_3}>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  );
}