import './App.css';
import { useEffect, useState } from "react";
import { getAllPosts, getUsers } from "./utils/apiFetcher";
import { usePosts } from "./context/PostsContext";
import PostsCardList from "./components/PostsCardsTable";
import FiltersMenu from "./components/FiltersMenu";

function App() {
    const [ loading, setLoading ] = useState(true);
    const { posts, users, setPosts, setUsers } = usePosts();


    useEffect(() => {
        const fetchPosts = async () => {
            const posts = await getAllPosts();
            setPosts(posts);
        }

        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users);
        }

        fetchPosts();
        fetchUsers();
    }, [setPosts, setUsers]);

    useEffect(() => {
        if (posts.length > 0 && Object.entries(users).length > 0) {
            setLoading(false);
        }
    }, [posts, users])

    return (
    <>
        <h1>GeoPost Explorer</h1>
        {loading ? <p>Loading...</p> :
            <>
                <FiltersMenu />
                <PostsCardList />
            </> }
    </>)
}

export default App;
