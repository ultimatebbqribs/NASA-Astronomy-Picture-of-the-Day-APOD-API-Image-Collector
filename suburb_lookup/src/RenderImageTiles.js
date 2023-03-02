import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './styles/render_image_tiles.css';
import { Link, Outlet } from "react-router-dom"

// import addToFavorites from "./addToFavorites";
import { useState } from "react";

import PinModal from "./PinModal";

const style = {
    display: 'flex',
    flexDirection: 'column'
};



export default function RenderImageTiles(props) {
    const [favoriteIcon, setFavoriteIcon] = useState(null)
    const [favorite, setFavorite] = useState([])
    console.log(props.items)
    // updates favorite icon and calls addToFavorites function
    // every click adds the item into local storage 
    function addToFavorites(item) {
        // pass array of objects - 
        console.log(item)
        window.localStorage.setItem(item.title, JSON.stringify(item));
        setFavorite()

        setFavoriteIcon(true)

        // addToFavorites()
    }
    // conditional statement to check if favorite has been clicked then update icon - does not work yet 
    // let favoriteButton
    // if (!favoriteIcon) {
    //     favoriteButton = <Button size="small"><FavoriteBorderIcon
    //         onClick={() => addToFavorites(item)}
    //         color="primary" /></Button>
    // } else {
    //     favoriteButton = <Button size="small"><FavoriteIcon
    //     onClick={() => addToFavorites(item)}
    //     color="primary" /></Button>
    // }

    return (
        <div><div className="board_title_bar">
            <h1 id="board_heading">Space Selection</h1>
            <div className="heading_favorites"><Link to="/favorites">Favorites</Link></div>
        </div>
        {/* masonary variant maintains image aspect ratio */}
            <ImageList variant="masonry" cols={3}>
                {props.items.map((item) => (
                    <div className="image_tile">
                    <ImageListItem key={item.title} sx={style}>
                        <img
                            src={`${item.url}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title} 
                            loading="lazy"/>

                        <div className="bottom_link_bar">
                            <PinModal
                                title={item.title}
                                img={item.hdurl}
                                explanation={item.explanation}
                            />

                            <Button size="small"><FavoriteBorderIcon
                                onClick={() => addToFavorites(item)}
                                color="primary" /></Button>

                        </div>
                    </ImageListItem>
                    </div>
                ))}
            </ImageList>
        </div>
    )

}