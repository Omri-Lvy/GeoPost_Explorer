import Map from './components/Map';
import { getRandomCoordinates } from "../../utils/getRandomCoordinates";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { clearLocalStorage } from "../../utils/helpers";

const PostCard = ({post={}, user={}, className}) => {
    const [location, setLocation] = useState([])
    const {title, body} = post;
    const {name} = user;

    useEffect(() => {
        const getCoordinates = async () => {
            const cardId = `card-${post.id}`;
            const cachedCoordinates = JSON.parse(localStorage.getItem(cardId));

            if (cachedCoordinates) {
                setLocation(cachedCoordinates);
            }
            else {
                const coordinates = await getRandomCoordinates();
                localStorage.setItem(cardId, JSON.stringify(coordinates));
                setLocation(coordinates)
            }
        }

        getCoordinates();

        // Set up a listener for the beforeunload event
        window.addEventListener('beforeunload', clearLocalStorage);

        // Clean up the listener when the component is unmounted
        return () => {
            window.removeEventListener('beforeunload', clearLocalStorage);
        };

    },[post.id]);


    return (
        <Card className={className} sx={{borderRadius: '10px'}} raised={true}>
            <CardContent className="content" sx={{paddingBottom: "0.25em"}}>
                <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: '600'}}>
                    {title}
                </Typography>
                <Typography variant="body1">
                    {body}
                </Typography>
                <Typography variant="caption" color="text.secondary" align="right" sx={{marginTop: '0.5em',}}>
                    Author: {name}
                </Typography>
            </CardContent>
            <div className="map-container">
                <Map location={location}/>
            </div>
        </Card>
    );
};

export default PostCard;
