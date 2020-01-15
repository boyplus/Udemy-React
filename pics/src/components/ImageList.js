import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
    const images = props.images.map(image => {
        return (
            <div key={image.id}>
                <ImageCard image={image} />
            </div>
        );
    });
    return <div className="image-list">{images}</div>;
};

export default ImageList;
