import TiltedCard from './card.jsx';

export default function Mainhome() {
    return (
        <div style={{marginTop:"-80vh", marginLeft:"10vw", position:"relative", zIndex: 1}}>
            <TiltedCard
                imageSrc="/BIOFEST.jpg"
                altText="Game Image"
                captionText=""
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={30}
                scaleOnHover={1.3}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                    <p className="tilted-card-demo-text">
                    Kendrick Lamar - GNX
                    </p>
                }
            />
        </div>
    );
  }