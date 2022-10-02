const ImageContainer = ({previev, fetchError}) => {
    return (

            <div className='photo'>
                {previev &&
                    <img src={previev}
                         className='photo'/>
                }
                {fetchError &&
                    <p>{fetchError}</p>
                }
            </div>
    );
};

export default ImageContainer;