import './landing_page.css'
import TextField from '@mui/material/TextField';


export default function LandingPage() {

    return <div>
        <div className="landing_background">
            <div className='landing_content'>
                <p1 id="landing_heading">Your Suburb Your History</p1>
                <p4>A history snapshot of where you live - powered by the Museams Victoria API</p4>
                <TextField id="search-basic" label="Search" variant="filled"  
    sx={{
    marginTop:10,
    position:'relative',
    // backgroundColor:(128, 128, 128, 1),
    }}
                />
            </div>


        </div>
    </div>
}