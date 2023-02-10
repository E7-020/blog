import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../style/news.css";
import { useEffect } from "react";
import { uploadPosts } from "../redux/reducers/postsReducer";

export const News = () => {

  const { posts} = useSelector((state) => state.postsReducer);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(uploadPosts());
  }, []);


  

  return (
    <div>
      <div className="news">
        <div className="news-block">
          <Link 
          to={`/ReadMore/${posts[0]?._id}`}
          style={{ textDecoration: "none" }}
          >
            <div  style={{ backgroundImage: `url(${posts[0]?.image})` }} className="news-block-img">
                <p className="news-block-link-title">{posts[0]?.title}</p>
                <p className="news-block-link-text">{posts[0]?.text.slice(0,100)}...</p> 
            </div>
            
          </Link>
        </div>

        <div className="second-news">
          <div className="news-second-block">
            <Link
            to={`/ReadMore/${posts[3]?._id}`}
              style={{ textDecoration: "none" }}
            >
            <div style={{ backgroundImage: ` url(${posts[3]?.image})` }} className="news-second-block-img">
              <p  className="news-second-block-title">{posts[3]?.title}</p>
              <p  className="news-second-block-text">{posts[3]?.text.slice(0,100)}...</p>
            </div>
              
            </Link>
          </div>

          <div className="news-third-block">
            <Link
            to={`/ReadMore/${posts[2]?._id}`}
            style={{ textDecoration: "none" }}
            >
                <div style={{ backgroundImage: `url(${posts[2]?.image})` }}  className="news-third-block-img">
                    <p className="news-third-block-title">{posts[2]?.title}</p>
                    <p className="news-third-block-text">{posts[2]?.text.slice(0,100)}...</p>
                </div>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
