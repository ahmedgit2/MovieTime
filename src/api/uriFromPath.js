

export default PhotoBaseUri = (path) => {
    const imageBase = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageUri = imageBase + path + imageSize;
    return imageUri;
}



