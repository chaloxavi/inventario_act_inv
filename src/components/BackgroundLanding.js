import '../styles/BackgroundLanding.css'



export const BackgroundLanding = (props) => {

    return (
        <div className="background-landing-image">
            <div className="background-landing-image-text">UNIR PLUS</div>
            <div className="background-landing-image-content">
                {props.children}
            </div>
        </div>
    )
}