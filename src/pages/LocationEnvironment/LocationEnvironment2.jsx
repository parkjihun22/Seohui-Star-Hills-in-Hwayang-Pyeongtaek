import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>평택 화양 서희스타힐스 - 프리미엄</title>
  <meta
    name="description"
    content="평택 화양 서희스타힐스 프리미엄 안내. 평택 화양지구 중심 입지와 생활 인프라, 교통 환경, 브랜드 주거 가치를 확인하세요."
  />
  <link rel="canonical" href="https://www.leecols.kr/LocationEnvironment/primium" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>
  평택 화양 서희스타힐스 프리미엄
</h1>
<p className={styles.screenReaderOnly}>
  평택 화양 서희스타힐스의 프리미엄을 안내합니다. 평택 화양지구 중심 입지와
  생활 인프라, 교통 환경, 브랜드 주거 가치가 어우러진 주거 환경을 확인해보세요.
</p>

<div className={styles.textBox}>
  <div>화양지구의 새로운 주거 중심</div>
  <div>평택 화양 서희스타힐스 프리미엄</div>
</div>

<img
  src={page1}
  className={styles.image3}
  alt="평택 화양 서희스타힐스 프리미엄 안내"
/>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
