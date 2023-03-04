import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './styles/render_image_tiles.css';
import { Link } from "react-router-dom"
import { useState } from "react";

import PinModal from "./PinModal";

const style = {
    display: 'flex',
    flexDirection: 'column'
};


// Render main page of data retrieved from APOD API 
export default function RenderImageTiles(props) {



// passes favorite data into local storage 
    function addToFavorites(item) {
        window.localStorage.setItem(item.title, JSON.stringify(item));
    }


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

                            <Button   size="small"><FavoriteBorderIcon
                                onClick={() => addToFavorites(item)} data-testid="add_to_favorites"
                                color="primary" /></Button>

                        </div>
                    </ImageListItem>
                    </div>
                ))}
            </ImageList>
        </div>
    )

}