import CreateIcon from '@mui/icons-material/Create';
import React, { useState, useEffect } from 'react'
import './feed.css'
import InputOption from './InputOption';
import { Image } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import {db, auth} from './firebaseConfig';
import { collection, doc, getDoc, setDoc, onSnapshot } from "firebase/firestore"; 


const Feed = () => {

    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);

    const getPosts =  async() => {
        const getPosts = doc(db, 'posts', 'SF');
        const finalPosts = await getDoc(getPosts);
        console.log(finalPosts);
    }

    useEffect(() => {
        getPosts();
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name:'Vincent Paul',
            description:'Hello',
            message:input,
            photoURL:'',

        })
    }

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type='text'/>
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption  title='Photo' color='#378fe9' Icon={Image}/>
                    <InputOption  title='Video' color='#5f9b41' Icon={YouTubeIcon}/>
                    <InputOption  title='Event' color='#c37d17' Icon={EventNoteIcon}/>
                    <InputOption  title='Write Article' color='#e16744' Icon={ArticleIcon}/>
                </div>
            </div>
            {posts}
            <Post name='Vincent Paul' description='test' message='Hello' />
        </div>
    )
}

export default Feed