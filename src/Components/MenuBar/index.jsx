import React, { useEffect, useState } from 'react'
import Styles from "./index.module.scss"
import logo from "../../Assets/logo (1).png";
import logo1 from "../../Assets/Profile - for Mobile Version.png"
import logo2 from "../../Assets/Register With us - For Mobile  Version.png"
import CommonNavList from '../CommonNavLi';

const MenuBar = () => {
    const [toggle, setToggle] = useState(false);
    const openMenu = () => {
        setToggle(!toggle);
        document.body.style.overflow = "hidden";
    };
    const closeBtn = () => {
        setToggle(false)
        document.body.style.overflow = "auto";
    }

    // useEffect(() => {
    //     if (toggle) {
    //         document.body.addEventListener("click", handleBodyClick);
    //     } else {
    //         document.body.removeEventListener("click", handleBodyClick);
    //     }
    // }, [toggle]);
    // const handleBodyClick = () => {
    //     setToggle(!true);
    // };

    return (
        <>
            <div className={Styles.menuBar}>
                <div className={Styles.menuBar__headerArea}>
                    <div className={Styles.menuBar__headerArea__menu}>
                        <button onClick={openMenu}><i className="fa-solid fa-bars"></i></button>
                    </div>
                    <div className={Styles.menuBar__headerArea__logo}>
                        <img src={logo} alt="error" />
                    </div>
                    <div className={Styles.menuBar__headerArea__youtube}>
                        <button>Watch on youtube</button>
                    </div>
                </div>
                {toggle &&
                    <div className={Styles.menuBar__openMenu}>
                        <div className={Styles.menuBar__openMenu__blur}>
                        </div>
                        <div className={Styles.menuBar__openMenu__main}>
                            <button onClick={() => closeBtn(false)}><i className="fa-solid fa-xmark"></i></button>
                            <div className={Styles.menuBar__openMenu__main__top}>
                                <div className={Styles.menuBar__openMenu__main__top__wrap}>
                                    <div className={Styles.menuBar__openMenu__main__top__wrap__left}>
                                        <img src={logo1} alt="error" />
                                    </div>
                                    <div className={Styles.menuBar__openMenu__main__top__wrap__right}>
                                        <p>Hello guest</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.menuBar__openMenu__main__navBar}>
                                <ul className={Styles.menuBar__openMenu__main__navBar__main}>
                                    <CommonNavList list="Home" />
                                    <CommonNavList list="Sociology" />
                                    <CommonNavList list="Essay" />
                                    <CommonNavList list="Gs" />
                                    <CommonNavList list="Text Series" />
                                    <CommonNavList list="Blogs" />

                                </ul>
                            </div>
                            <div className={Styles.menuBar__openMenu__main__register}>
                                <div className={Styles.menuBar__openMenu__main__register__userprofile}>
                                    <img src={logo2} alt="error" />
                                </div>
                                <p>register with<span> triumph ias</span> </p>
                                <button>REGISTER</button>

                            </div>
                            <div className={Styles.menuBar__openMenu__main__installApp}>
                                <p>Get <b>triumph ias</b><span>lerning app</span> </p>
                                <p>Your own lerning app</p>
                                <button>Install the App</button>
                            </div>
                        </div>
                    </div>}

            </div>
        </>

    )
}

export default MenuBar
