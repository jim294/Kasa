const Banner = (props) => {
    const {captionText, imageUrl, alt}= props;
    return (
        <figure className='banner'>
            <img src={imageUrl} alt={alt}/>
            <figcaption>{captionText}</figcaption>
        </figure>
    );
};

export default Banner;

// src="./images/plage.png"