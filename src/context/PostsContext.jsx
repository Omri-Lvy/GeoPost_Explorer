import { createContext, useContext, useState } from "react";

const PostsContext = createContext({
    posts: [],
    setPosts: () => {},
    users: {},
    setUsers: () => {},
});

export const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    return (
        <PostsContext.Provider value={{ posts, setPosts, users, setUsers }}>
            {children}
        </PostsContext.Provider>
    );
};

export const usePosts = () => {
    const context = useContext(PostsContext);

    if (!context) {
        throw new Error("usePosts must be used within a PostProvider");
    }

    return context;
}
