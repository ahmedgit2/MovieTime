import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3",

});

export const uriFromPath = (path) => {
    const imageBase = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageUri = imageBase + path + imageSize;
    return imageUri;
}


export const popular = async () => {
    const Response = await movieApi.
        get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
    return Response.data;
}
