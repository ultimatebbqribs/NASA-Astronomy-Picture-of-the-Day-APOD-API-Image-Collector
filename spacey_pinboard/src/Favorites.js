import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Link, Outlet } from "react-router-dom"

import './styles/render_image_tiles.css';
import { useState, useEffect } from "react";

import PinModal from "./PinModal";

// renders favorited items from local storage + function to delete from favorites 
export default function Favorites() {
    const [favorites, setFavorites] = useState([])
    // retrieves all items from local storage as individual objects 
    let arrayOfKeys = Object.keys(localStorage);
    let items = { ...localStorage };
    let item_array = []
    // loop to unpack local storage and assign to variable
    for (let i = 1; arrayOfKeys.length > i; i++) {

        let itemObject = localStorage[arrayOfKeys[i]]
        itemObject = JSON.parse(itemObject)
        item_array.push(itemObject)
    }

    // assigns favorites into state so delete function will update page render 
    useEffect(() => {
        setFavorites(item_array);
    }, []);


    function deleteFavorite(item){
        // clears all local storage
        window.localStorage.clear()
        let newFavorites = [] 
        // map conditional to find remove delete item from favorites state array, adds new version to state and local storage 
        favorites.map(function(element){
            if(element.title !== item.title ){
                console.log(element)
                newFavorites.push(element)
                window.localStorage.setItem(element.title, JSON.stringify(element))
            }
        })
        setFavorites(newFavorites)
    }

    return (
        <div><div className="board_title_bar">
            <h1 id="board_heading">Favorites</h1>
            <div className="heading_favorites"><Link to="/Main">Main</Link></div>
        </div>
            <ImageList variant="masonry" cols={3}>
                {favorites.map((item) => (
                    <div>
                    <ImageListItem key={item.title}>
                        <img
                            src={`${item.url}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title} 
                            loading="lazy"/>
                        <ImageListItemBar />
                        <div className="bottom_link_bar">
                            <PinModal
                                title={item.title}
                                img={item.hdurl} 
                                explanation={item.explanation}
                            />

                            <Button size="small"><DeleteOutlinedIcon
                                onClick={() => deleteFavorite(item)}
                                color="primary" /></Button>

                        </div>
                    </ImageListItem>
                    </div>
                ))}
            </ImageList>
        </div>
    )
}