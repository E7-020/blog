import '../style/read-more.css'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { uploadPosts } from '../redux/reducers/postsReducer';
export const ReadMore = () => {
    const { posts} = useSelector((state) => state.postsReducer);
    const {_id} = useParams();
    const all = posts.find((item) => item._id === _id);
    
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(uploadPosts());
  }, []);
    return(
        <div className="read-more">
            <img className="read-more-img" src={all?.image} alt="" />
            <p className="read-more-title">{all?.title}</p>
            <p className="read-more-text">{all?.text.slice(0,300)}</p>
        </div>
    )
}