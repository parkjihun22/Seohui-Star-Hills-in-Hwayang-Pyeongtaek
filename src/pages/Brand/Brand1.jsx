import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [
      { title: "브랜드 소개", url: "/brand/intro" }, 
      // { title: "홍보 영상", url: "/brand/video" }
    ];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>평택 화양 서희스타힐스 - 브랜드 소개</title>
  <meta
    name="description"
    content="평택 화양 서희스타힐스 브랜드 소개. 서희스타힐스의 주거 철학과 설계 가치, 쾌적한 단지 구성과 생활 중심 설계를 통해 새로운 주거 가치를 제시하는 평택 화양지구 아파트."
  />
  <link rel="canonical" href="https://www.leecols.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="평택 화양 서희스타힐스" />
  <meta property="og:title" content="평택 화양 서희스타힐스 - 브랜드 소개" />
  <meta
    property="og:description"
    content="서희스타힐스 브랜드 소개. 실거주 중심 설계와 쾌적한 주거환경, 생활 편의성을 담은 평택 화양 서희스타힐스의 브랜드 가치를 소개합니다."
  />
  <meta property="og:url" content="https://www.leecols.kr/Brand/intro" />
  <meta property="og:image" content="https://www.leecols.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />
<MenuBar contents={menuContents} />

<h1 className={styles.screenReaderOnly}>평택 화양 서희스타힐스 브랜드 소개</h1>
<p className={styles.screenReaderOnly}>
  평택 화양 서희스타힐스는 서희스타힐스 브랜드의 주거 철학을 담은 아파트 단지입니다.
  효율적인 공간 설계와 쾌적한 단지 계획, 생활 중심의 주거 환경을 통해
  평택 화양지구의 새로운 주거 가치를 제시합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>화양지구의 새로운 주거 가치</div>
  <div>평택 화양 서희스타힐스</div>
</div>

            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="평택 화양 서희스타힐스brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
