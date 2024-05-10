import {useParams, Navigate} from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';

function GalleryView ({galleries}){
    const {galleryId} = useParams();
    let galleryData = null;

    galleries.forEach (gallery => {
        if (gallery.id == galleryId) {
            galleryData = gallery;
        }
    })

    if (galleryData) {
        console.log(galleryData.objects[0].images)
        return <h2>{galleryData.name}</h2>
    } else {
        return <Navigate to="/" replace={true} />
    }
}

export default GalleryView;