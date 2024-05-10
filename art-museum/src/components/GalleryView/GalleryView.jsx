import {useParams, NavLink} from 'react-router-dom';
function GalleryView ({galleries}){
    const {galleryId} = useParams();
    debugger
    // const galleryData = galleries[galleryId];
    console.log(galleryId);
    console.log(galleries);
    return <h1>hello</h1>
}

export default GalleryView;