import './styles/landing_page.css'
import * as React from "react";
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';




// function which renders the landing page headings and has link to main page 
export default function LandingPage() {
    const navigate = useNavigate();

    return <div>
        <div className="landing_background">
            <div className='landing_content'>
                <p1 id="landing_heading">NASA Pintrest </p1>
                <p4>A spacey pintrest board - powered by the NASA API</p4>

                <Button className='launch_button' variant='contained' onClick={() => navigate('/main')}
                    sx={{
                        backgroundColor: 'rgb(50,59,107)',
                        borderRadius: '20%',
                        padding:'20px',
                        fontFamily: 'nasalization',
                        width:'30px',
                        
                    }}>
                    Lift Off! 
                </Button>
            </div>
            <footer className='footer'>site developed by AB_Code</footer>
        </div>
    </div>
}
