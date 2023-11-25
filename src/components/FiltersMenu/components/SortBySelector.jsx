import React, { useEffect, useState } from "react";
import Switch, { switchClasses } from '@mui/joy/Switch';
import { usePosts } from "../../../context/PostsContext";

const SortBySelector = () => {
    const [sortBy, setSortBy] = useState("id");
    const {posts, setPosts} = usePosts();

    useEffect(() => {
        const sortedPosts = [...posts].sort((a, b) => {
            if (sortBy === "id") {
                return a.id - b.id;
            } else {
                return a.title.localeCompare(b.title);
            }
        });
        setPosts(sortedPosts);
        // eslint-disable-next-line
    }, [sortBy]);


    return (
        <div className="sorting-selector-container">
        <span>Sort By</span>
        <div className="selector-container">
            <span>Id</span>
            <Switch
                color={sortBy === "id"  ? 'success' : 'danger'}
                checked={sortBy === "title"}
                onChange={(e) => setSortBy(e.target.checked ? "title" : "id")}
                sx={{
                    '--Switch-thumbSize': '16px',
                    '--Switch-trackWidth': '40px',
                    '--Switch-trackHeight': '24px',
                    '--Switch-trackBackground': '#00457C',
                    '&:hover': {
                        '--Switch-trackBackground': '#00457C',
                    },
                    [`&.${switchClasses.checked}`]: {
                        '--Switch-trackBackground': '#00457C',
                        '&:hover': {
                            '--Switch-trackBackground': '#00457C',
                        },
                    },
                }}
            />
            <span>Title</span>
            </div>
        </div>

    );
};

export default SortBySelector;
