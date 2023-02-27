import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import PinModal from "./PinModal";


export default function RenderImageTiles(props) {
    console.log(props.items)
    return (
        <div>
            <h1>Space Selection</h1>
            <ImageList variant="masonry" cols={3}>
                {props.items.map((item) => (
                    <ImageListItem key={item.title}>
                        <img 
                        src={`${item.url}?w=248&fit=crop&auto=format`} 
                        srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title} />
                        <ImageListItemBar />
                        <PinModal 
                        title={item.title}
                        img={item.hdurl}
                        explanation={item.explanation}/>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )

}