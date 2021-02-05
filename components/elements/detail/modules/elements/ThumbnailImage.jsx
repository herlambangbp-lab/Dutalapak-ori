import React from 'react';
import { isStaticData } from '../../../../../utilities/app-settings';
import { baseUrl, imageUrl } from '../../../../../repositories/RepositoryIndex';

const ThumbnailImage = ({ url }) => (
    <img
        src={isStaticData === false ? `${imageUrl}${url}` : url}
        alt="martfury-image"
    />
);

export default ThumbnailImage;
