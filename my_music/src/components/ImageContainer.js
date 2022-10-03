const ImageContainer = ({preview}) => {
    return (

            <div className='imageContainer'>
                {preview &&
                    <img src={preview}
                         className='image'/>
                }
            </div>
    );
};

export default ImageContainer;