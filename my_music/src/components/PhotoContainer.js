import Button from "./Button";

const PhotoContainer = ({previev}) => {
    return (
        <div className = 'photoContainer'>
            {previev &&
                <img src = {previev} className = 'photo'/>
            }
            <Button/>
        </div>
    );
};

export default PhotoContainer;