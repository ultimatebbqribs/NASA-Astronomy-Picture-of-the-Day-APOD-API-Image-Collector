import PinModal from "./PinModal";
import RenderImageTiles from "./RenderImageTiles";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom'
import example_data from './example_data.json'
import './mainboard.css'

const API_KEY = process.env.REACT_APP_API_KEY



export default function MainPinboard(props) {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const getItems = async () => {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=21`);
            // const response = example_data
            setItems(response.data.filter((value)=>{
                if(!params.searchTerm){
                    return true
                }
                return value.explanation.toLowerCase().includes(params.searchTerm.toLowerCase())
            }))
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getItems()
    }, [])

    if(loading){
        return(
        <p>loading....</p>
        )
    }

    if (items.length === 0) {
        return (
            <p>no records found, try another search term </p>
        )
    }

    return (
        <RenderImageTiles 
        items= {items}/>
        
    )
}