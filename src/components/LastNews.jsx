import '../style/last-news.css';
import { useEffect } from "react";
import { uploadPosts } from "../redux/reducers/postsReducer";
import { useSelector, useDispatch } from "react-redux";
export const LastNews = () => {
    const dispatch = useDispatch();
    const { posts, isLoading } = useSelector((state) => state.postsReducer);

    useEffect(() => {
      dispatch(uploadPosts());
    }, []);
  
   

    return(
        <div className="last-news">
            <div className="last-news-line"></div>
            <p className="last-news-header">Последние новости в мире IT</p>
            
            <div className="last-news-blocks">
                
                <div className="last-news-first-blocks">
                    <div style={{ backgroundImage: `url(${posts[posts.length - 1]?.image})` }} className="last-news-first-blocks-img"></div>
                    <p className="last-news-first-blocks-title">{posts[posts.length - 1]?.title}</p>
                    <p className="last-news-first-blocks-subtitle">{posts[posts.length - 1]?.text.slice(0,75)}...</p>
                    <button></button>
                </div>
                <div className="last-news-second-blocks">
                    <div style={{ backgroundImage: `url(${posts[posts.length - 2]?.image})` }} className="last-news-first-blocks-img"></div>
                    <p className="last-news-first-blocks-title">{posts[posts.length - 2]?.title}</p>
                    <p className="last-news-first-blocks-subtitle">{posts[posts.length - 2]?.text.slice(0,67)}...</p>
                    <button></button>
                </div>
            </div>
           
        </div>
    )
}