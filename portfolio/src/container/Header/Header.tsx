import './Header.scss';
import { motion } from 'framer-motion';
import {images} from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';
const Header = () => {
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}
    return (
        <div className="app__header app__flex">
        {/*
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0,1] }}
                transition={{ duration: 1 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span> 👋</span>
                        <div style={{ marginLeft: 20}}>
                            <p className="p-text">Hello I am </p>
                            <h1 className="head-text"> Isaac</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className="p-text">Software Developer</p>
                        <p className="p-textt">Web Developer</p>
                    </div>
                </div>
            </motion.div> */}
            <div className="app__header-info">
            </div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <div className="terminal">
                    <p>&gt;_ Hello, I am Isaac. A computer scientist with <br /></p>
                    <p> &gt;_ an emphasis on software engineering and software </p>
                    <p> &gt;_ development</p>
                    <p> &gt;_ Scroll below to see some of my work</p>
                </div>
                {/* 
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{scale: [0, 1]}}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                /> */ }
            </motion.div>
            <motion.div
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
        {[images.typescript, images.redux, images.react, images.node].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="circle" />
            </div>
        ))}
            </motion.div>
        </div>
    )
};
export default AppWrap(Header, 'home', "djf");
