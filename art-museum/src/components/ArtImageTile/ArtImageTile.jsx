const ArtImageTile = ({art}) => {
    console.log(art.baseimageurl)
    return <img src={art.baseimageurl}/>
}

export default ArtImageTile