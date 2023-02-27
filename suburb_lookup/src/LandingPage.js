import './landing_page.css'
import axios from 'axios';
import { useState } from 'react';
import * as React from "react";
import { BottomNavigation, TextField, Button } from '@mui/material'
import MainPinboard from './MainPinboard';
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()

// const axios = require('axios');


// function which renders the landing page headings and form - inc signin component and museams api search component 
export default function LandingPage() {
    const [search, setSearch] = useState("")


    // function to handle form submit - sets "search" state as value of text input 
    function handleSubmit(e) {
        e.preventDefault();
        setSearch(e.target[0].value)
        console.log(search)

    }

    async function handleRandomSubmit() {
        try{
            const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10');
            response = response.data
            console.log(response)
        }   catch(error){
            console.error(error)
        }
        <MainPinboard
        data = "response"
        />
        // navigate("/main", { replace: true, state: { bookName: "Fake Title" }})

        
        
    }

    return <div>
        <div className="landing_background">
            <div className='landing_content'>
                <p1 id="landing_heading">NASA Pintrest </p1>
                <p4>A spacey pintrest board - powered by the NASA API</p4>
                <form method="post" onSubmit={handleSubmit}>
                    <TextField id="search-basic"
                        name="searchInput"
                        label="Search"
                        variant="outlined"
                        placeholder='Search for your fav space object'

                        sx={{
                            minWidth: 350,
                            marginRight: 2,
                            "& input":
                                { color: "blue" },

                        }}
                    />

                    <Button variant='contained' type="submit" color='success' sx={{
                        backgroundColor: 'rgb(50,59,107)'
                    }}>Submit</Button>
                </form>
                <Button variant='contained' onClick={handleRandomSubmit}
                    sx={{
                        backgroundColor: 'rgb(50,59,107)'
                    }}>
                    Random space selection
                </Button>

            </div>

            <footer className='footer'> Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer Footer</footer>
        </div>
    </div>
}
