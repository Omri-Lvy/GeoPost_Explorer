import React, { useEffect, useState } from "react";
import { usePosts } from "../../../context/PostsContext";
import {
    Checkbox,
    FormControl,
    MenuItem,
    Select,
} from "@mui/material";
import { ListItemText } from "@mui/material";
import { getAllPosts, getPostByAuthorIds } from "../../../utils/apiFetcher";

const AuthorFilter = () => {
    const {users, setPosts} = usePosts();
    const names = Object.entries(users).map((user) => user[1].name);
    const [selectedNames,setSelectedNames] = useState(names)
    const handleChange = (event) => {
        setSelectedNames(event.target.value)
    };

    useEffect(() => {
        const updatePosts = async () => {
            if (selectedNames.length === names.length) {
                const posts = await getAllPosts();
                setPosts(posts);
            }
            else {
                const authorIds = Object.entries(users).filter((user) => selectedNames.includes(user[1].name)).map((user) => user[1].id);
                const posts = await getPostByAuthorIds(authorIds)
                setPosts(posts);
            }
        }

        updatePosts();
    }, [names.length, selectedNames, setPosts, users]);

    return (
        <div className="author-filter-container">
            <FormControl sx={{ m: 1, width: 300 }}>
                <span>Select Authors</span>
                <Select
                    id="author-select-checkbox"
                    multiple
                    value={selectedNames}
                    onChange={handleChange}
                    renderValue={(selectedNames) => {
                        if (selectedNames.length === names.length) {
                            return "All";
                        } else if (selectedNames.length > 0) {
                            return selectedNames.join(", ");
                        } else {
                            return "None";
                        }
                    }}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={selectedNames.includes(name)} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default AuthorFilter;
