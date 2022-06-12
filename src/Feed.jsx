import CreateIcon from '@mui/icons-material/Create';
import React, { useState, useEffect } from 'react'
import './feed.css'
import InputOption from './InputOption';
import { Image } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import {db} from './firebaseConfig';
import { getDatabase, ref, onValue} from "firebase/database";
import firebase from 'firebase/compat/app';
import { collection, doc, getDocs, addDoc } from 'firebase/firestore';
import { Timestamp, FieldValue, orderBy } from '@firebase/firestore';


const Feed = ({ user }) => {

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);

    const postsCollectionRef = collection(db, 'posts');

    const getPosts =  async() => {
        const data = await getDocs(postsCollectionRef);
        setPosts(...posts, data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }

    useEffect(() => {
        getPosts();
    }, [])

    const newPost = async(e) => {
        e.preventDefault();
        setInput('');
        await addDoc(postsCollectionRef, {name:user.user.displayName, message:input, description:'today', photoURL:'', timestamp:Timestamp.now()})
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type='text'/>
                        <button type='submit' onClick={newPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption  title='Photo' color='#378fe9' Icon={Image}/>
                    <InputOption  title='Video' color='#5f9b41' Icon={YouTubeIcon}/>
                    <InputOption  title='Event' color='#c37d17' Icon={EventNoteIcon}/>
                    <InputOption  title='Write Article' color='#e16744' Icon={ArticleIcon}/>
                </div>
            </div>
            {posts.map((post) => {
                return <Post name={post.name} description={post.description} message={post.message} key={post.id} />
            })}
        </div>
    )
}

export default Feed