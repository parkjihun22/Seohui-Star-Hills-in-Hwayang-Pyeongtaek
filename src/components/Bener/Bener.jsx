import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
<div className={styles.container}>
    {/* 배너 이미지 */}
    <img
        className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
        src={img}
        alt="평택 화양 서희스타힐스 메인 배너 이미지"
    />
    <div className={styles.overlay}></div>
    <div
        className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
    >
        <div
            className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
        >
            {title}
        </div>
        {contents(title, isLoaded)}
    </div>
</div>
);
};

export default Bener;

const contents = (text, isLoaded) => {
  if (text === '평택 화양 서희스타힐스' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 화양지구의 미래가치를 누리는 새로운 주거 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·생활·자연을 가까이 두고 더 편리한 일상을 완성하는 브랜드 아파트.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 화양 서희스타힐스에서 화양지구의 중심 라이프를 만나보세요.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 화양지구 중심 입지에 들어서는 서희스타힐스의 주거 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          사업개요부터 세대안내, 청약정보까지 꼭 필요한 분양 정보를 한눈에 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          실거주와 미래가치를 함께 고려한 평택 화양 서희스타힐스.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 화양 서희스타힐스
        </div>
      </>
    );
  } else if (text === '입지환경'|| text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 화양지구의 비전과 생활 인프라를 가까이 누리는 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          편리한 교통환경과 생활편의시설, 쾌적한 주거환경이 어우러진 프리미엄을 확인하세요.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          주거의 편의와 품격을 높이는 설계, 조경, 커뮤니티를 담은 단지 구성.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          일상을 더욱 여유롭게 만드는 공간 계획과 브랜드 프리미엄을 제공합니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          평택 화양 서희스타힐스, 새로운 중심에서 시작되는 가치 있는 생활.
        </div>
      </>
    );
  }
};
