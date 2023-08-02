/* eslint-disable jsx-a11y/iframe-has-title */
export default function SplashReel() {
  return (
    <div className="snapScroll">
      {/* <div className="splashReelContainer">
        <iframe
          className="splashFrame"
          src="https://player.vimeo.com/video/195581267?background=1"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="video-background desktop">
        <video playsInline={true} autoPlay={true} muted={true} loop={true}>
          <source src="/video/splashDesktop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video-background mobile">
        <img src="/images/joelHeadshot.png" alt="Mobile Background" />
      </div>
    </div>
  );
}
