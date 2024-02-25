import React, { useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { usePosts } from "../../context/PostsContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PostCard from "../PostCard";

const PostsCardTable = () => {
    const [page, setPage] = useState(1);
    const { posts, users } = usePosts();
    const postsPerPage = 10;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    return (
        <>
            <div className="postsList">
                {posts.slice((page - 1) * postsPerPage, page * postsPerPage).map((post) => (
                    <PostCard key={post.id} post={post} user={users[post["userId"]]} className="postsList__item"/>
                ))}
            </div>
            <Pagination
                onChange={handleChangePage}
                page={page}
                count={posts.length / postsPerPage}
                className={"postsList__pagination"}
                renderItem={(item) => (
                    <PaginationItem
                        slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                        {...item}
                    />
                )}
            />
        </>
    );
};

export default PostsCardTable;
