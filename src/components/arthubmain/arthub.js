import './arthub.css'
import art from "../../assets/images/art.png"
import file from "../../assets/images/file.mp4"

export const Artmain = () => {
    return(
        <>
        <div className='arthub'>
            <div className='inner'>
          <section className="bg-gray-900 h-screen relative flex justify-center items-center mb-20 overflow-hidden" style={{height: '210px'}}>
            <svg style={{opacity:0, position:'fixed', zIndex:-999}} viewBox="0 0 1 1">
                <defs>
                    <clipPath id="clip" clipPathUnits="objectBoundingBox">
                        <text x="0.5" y="0.4" fontSize="0.085" textAnchor="middle" alignmentBaseline="middle">ART THERAPY</text>
                    </clipPath>
                </defs>
            </svg>
            <video autoPlay muted loop playsInline className="absolute z-10 w-auto min-w-full min-h-full max-w-none" style={{height: '500px', '@media (max-width: 768px)': {
      height: '200px'
    }}}>
                <source src={file} type="video/mp4"/>
                This browser does not support the video tag.
            </video>
        </section> 
        <div className="gradient-text" style={{marginLeft: '180px', fontSize: '25px', fontWeight: '600'}}>
        <span className="gradient">An Artistic approach towards Mental Wellness</span>
        </div>
        </div>
        <img className="image" src={art} alt="art"/>
        </div>
        </>
    )
}