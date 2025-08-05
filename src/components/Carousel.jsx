// src/components/Carousel.jsx
import { useState, useEffect } from "react";

const Carousel = ({ graduates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (!graduates || graduates.length === 0) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % graduates.length);
          setIsTransitioning(false);
        }, 150);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [graduates, graduates?.length, isTransitioning]);

  // Early return if no graduates
  if (!graduates || graduates.length === 0) {
    return (
      <div style={{ 
        minHeight: "100vh",
        height: "100vh",
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        background: "linear-gradient(135deg, #8B0000 0%, #A0141E 45%, #B91C3C 100%)",
        color: "#FFFAF0",
        fontSize: "2rem",
        fontFamily: "'Georgia', serif",
        overflow: "hidden",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      }}>
        Cargando galería...
      </div>
    );
  }

  const graduate = graduates[currentIndex % graduates.length];
  const prevGraduate2 = graduates[(currentIndex - 2 + graduates.length) % graduates.length];
  const prevGraduate1 = graduates[(currentIndex - 1 + graduates.length) % graduates.length];
  const nextGraduate1 = graduates[(currentIndex + 1) % graduates.length];
  const nextGraduate2 = graduates[(currentIndex + 2) % graduates.length];

  const containerStyle = {
    minHeight: "100vh",
    height: "100vh",
    background: "linear-gradient(135deg, #8B0000 0%, #A0141E 45%, #c41235ff 0%, #CD2B47 75%, #E53E3E 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "1rem 3rem 0 3rem",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    overflow: "hidden",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0"
  };

  const titleStyle = {
    color: "#FFFAF0",
    fontSize: "2.5rem",
    fontWeight: "400",
    marginBottom: "2rem",
    marginTop: "1rem",
    textShadow: "0 3px 6px rgba(0,0,0,0.4)",
    letterSpacing: "3px",
    textAlign: "center",
    fontFamily: "'Georgia', serif",
    textTransform: "uppercase",
    borderBottom: "2px solid rgba(255,250,240,0.4)",
    paddingBottom: "0.5rem"
  };

  const carouselContainerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "1600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: "1500px",
    flex: "1",
    paddingBottom: "2rem"
  };

  const cardStyle = {
    background: "linear-gradient(145deg, rgba(139, 0, 0, 0.85), rgba(160, 20, 30, 0.8))",
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 25px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
    backdropFilter: "blur(15px)",
    border: "4px solid rgba(255, 0, 0, 1)",
    transform: isTransitioning ? "scale(0.96) rotateY(2deg)" : "scale(1) rotateY(0deg)",
    opacity: isTransitioning ? 0.8 : 1,
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    color: "#FFFAF0",
    position: "relative",
    zIndex: 5,
    minWidth: "450px",
    textAlign: "center",
    marginLeft: "1rem"
  };

  const sideCardStyle1 = {
    background: "linear-gradient(145deg, rgba(139, 0, 0, 0.7), rgba(185, 28, 60, 0.65))",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(139, 0, 0, 0.4)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    color: "#FFFAF0",
    transform: "scale(0.8)",
    opacity: 0.85,
    position: "relative",
    zIndex: 3,
    minWidth: "350px",
    textAlign: "center",
    marginRight: "1rem"
  };

  const sideCardStyle2 = {
    background: "linear-gradient(145deg, rgba(139, 0, 0, 0.5), rgba(205, 43, 71, 0.45))",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(139, 0, 0, 0.3)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    color: "#FFFAF0",
    transform: "scale(0.6)",
    opacity: 0.6,
    position: "relative",
    zIndex: 1,
    minWidth: "280px",
    textAlign: "center"
  };

  const imageStyle = {
    width: "auto",
    height: "auto",
    maxHeight: "570px",
    maxWidth: "450px",
    objectFit: "contain",
    borderRadius: "10px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.3), 0 0 0 2px rgba(139, 0, 0, 0.7)",
    border: "3px solid #e02a2aff",
    filter: "contrast(1.05) brightness(1.05) saturate(1.1)"
  };

  const sideImageStyle1 = {
    width: "auto",
    height: "auto",
    maxHeight: "380px",
    maxWidth: "350px",
    objectFit: "contain",
    borderRadius: "8px",
    boxShadow: "0 12px 24px rgba(0,0,0,0.25)",
    border: "2px solid rgba(185, 28, 60, 0.6)",
    filter: "contrast(1.02) brightness(1.02)"
  };

  const sideImageStyle2 = {
    width: "auto",
    height: "auto",
    maxHeight: "280px",
    maxWidth: "260px",
    objectFit: "contain",
    borderRadius: "6px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    border: "1px solid rgba(205, 43, 71, 0.4)",
    filter: "contrast(1.0) brightness(1.0)"
  };

  const nameStyle = {
    marginTop: "2rem",
    fontSize: "1.7rem",
    fontWeight: "600",
    color: "#FFFAF0",
    letterSpacing: "2px",
    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
    fontFamily: "'Georgia', serif",
    textTransform: "uppercase",
    lineHeight: "1.2"
  };

  const careerStyle = {
    marginTop: "0.8rem",
    fontSize: "1.1rem",
    color: "rgba(255,250,240,0.9)",
    fontStyle: "italic",
    fontFamily: "'Georgia', serif",
    letterSpacing: "1px",
    fontWeight: "300"
  };

  const sideNameStyle1 = {
    marginTop: "1.5rem",
    fontSize: "1.1rem",
    fontWeight: "500",
    color: "#FFFAF0",
    letterSpacing: "1px",
    textShadow: "0 1px 3px rgba(0,0,0,0.4)",
    fontFamily: "'Georgia', serif",
    textTransform: "uppercase",
    lineHeight: "1.2"
  };

  const sideCareerStyle1 = {
    marginTop: "0.5rem",
    fontSize: "0.9rem",
    color: "rgba(255,250,240,0.8)",
    fontStyle: "italic",
    fontFamily: "'Georgia', serif",
    letterSpacing: "0.5px",
    fontWeight: "300"
  };

  const sideNameStyle2 = {
    marginTop: "1rem",
    fontSize: "0.9rem",
    fontWeight: "500",
    color: "#FFFAF0",
    letterSpacing: "0.8px",
    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    fontFamily: "'Georgia', serif",
    textTransform: "uppercase",
    lineHeight: "1.2"
  };

  const sideCareerStyle2 = {
    marginTop: "0.3rem",
    fontSize: "0.7rem",
    color: "rgba(255,250,240,0.7)",
    fontStyle: "italic",
    fontFamily: "'Georgia', serif",
    letterSpacing: "0.3px",
    fontWeight: "300"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Promoción 2030-I</h1>
      
      <div style={carouselContainerStyle}>
        {/* Foto -2 (extrema izquierda) */}
        {graduates.length > 4 && (
          <div style={sideCardStyle2}>
            <img
              src={prevGraduate2.image}
              alt={prevGraduate2.data.name}
              style={sideImageStyle2}
            />
            <h4 style={sideNameStyle2}>{prevGraduate2.data.name.toUpperCase()}</h4>
            <p style={sideCareerStyle2}>{prevGraduate2.data.career}</p>
          </div>
        )}

        {/* Foto -1 (izquierda) */}
        {graduates.length > 2 && (
          <div style={sideCardStyle1}>
            <img
              src={prevGraduate1.image}
              alt={prevGraduate1.data.name}
              style={sideImageStyle1}
            />
            <h3 style={sideNameStyle1}>{prevGraduate1.data.name.toUpperCase()}</h3>
            <p style={sideCareerStyle1}>{prevGraduate1.data.career}</p>
          </div>
        )}

        {/* Foto principal (centro) */}
        <div style={cardStyle}>
          <img
            src={graduate.image}
            alt={graduate.data.name}
            style={imageStyle}
          />
          <h2 style={nameStyle}>{graduate.data.name.toUpperCase()}</h2>
          <p style={careerStyle}>{graduate.data.career}</p>
        </div>

        {/* Foto +1 (derecha) */}
        {graduates.length > 2 && (
          <div style={sideCardStyle1}>
            <img
              src={nextGraduate1.image}
              alt={nextGraduate1.data.name}
              style={sideImageStyle1}
            />
            <h3 style={sideNameStyle1}>{nextGraduate1.data.name.toUpperCase()}</h3>
            <p style={sideCareerStyle1}>{nextGraduate1.data.career}</p>
          </div>
        )}

        {/* Foto +2 (extrema derecha) */}
        {graduates.length > 4 && (
          <div style={sideCardStyle2}>
            <img
              src={nextGraduate2.image}
              alt={nextGraduate2.data.name}
              style={sideImageStyle2}
            />
            <h4 style={sideNameStyle2}>{nextGraduate2.data.name.toUpperCase()}</h4>
            <p style={sideCareerStyle2}>{nextGraduate2.data.career}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
