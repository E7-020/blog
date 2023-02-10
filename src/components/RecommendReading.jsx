import { useSelector } from "react-redux";
import '../style/recommend-reading.css';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadPosts } from "../redux/reducers/postsReducer";

import { Link } from "react-router-dom";
export const RecommendReading = () => {
    const { posts} = useSelector((state) => state.postsReducer);
   

    return(
        <div>
        <div className="recommend-reading-text">
            <p className="recommend-reading-text-header">Рекомендуем к прочтению</p>
        </div>
        <div className="recommend-reading">
            
            {posts.map((post) => (
            <Link to={`/ReadMore/${post?._id}`}  className='recommend-reading-link' style={{ textDecoration: "none" }}>

                <div style={{ backgroundImage: `url(${post?.image})` }} className="recommend-reading-block">
                    <p className="recommend-reading-block-title">{post?.title}</p>
                </div>
                </Link>
            
            ))}
        </div>
        </div>
    )
}