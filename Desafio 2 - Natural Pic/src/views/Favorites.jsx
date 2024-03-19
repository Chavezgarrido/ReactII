import { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../context/PhotosContext"
const Favorites = () => {
    const {photoData} = useContext(PhotoContext)
    const [arrayFav, setArrayFav] = useState(null)

    useEffect(() => {
        if (photoData) {
            const fotosFavoritas = photoData.filter((photo) => photo.liked);
            setArrayFav(fotosFavoritas);
        }
    }, [photoData]);

    return(
        <div>
            <h1 className="fotos-favoritas-title"> Fotos favoritas</h1>
            <div className="p-3 gallery grid-columns-4">
                {arrayFav === null ? (
                    <h1>Loading...</h1>
                ): (
                    arrayFav.map((photo) => (
                        <div style={{backgroundImage: `url(${photo.src.original})`}} className="photo" key={photo.id}>
                        </div>)
                      )
                    )}
            
                  </div>
                </div>
              );
            };
            export default Favorites;