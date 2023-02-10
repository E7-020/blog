import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { uploadPosts } from "../redux/reducers/postsReducer";
import { Link } from "react-router-dom";
import "../style/categories.css";
import { RecommendReading } from "./RecommendReading";

export const Categories = () => {
  const { posts } = useSelector((state) => state.postsReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { id } = useParams();
  const all = posts.filter((item) => item.categoryId === id);
  const cat = categories.filter((item) => item._id === id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(uploadPosts());
  }, []);
  return (
    <div className="categories">
     
      <div className="common-block">
        <div>
          {cat.map((cat) => (
        <p className="categories-header">{cat.title}</p>
        ))}
          {all.map((all) => (
            <div>
              <div className="categories-blocks">
                <div className="categories-blocks-item">
                  <img
                    className="categories-blocks-item-img"
                    src={all.image}
                    alt=""
                  />
                </div>
                <div className="categories-blocks-items">
                  <p className="categories-blocks-items-title">{all.title}</p>
                  <p className="categories-blocks-items-subtitle">
                    {all.text.slice(0, 105)}...
                  </p>
                  <Link
                    to={`/ReadMore/${all?._id}`}
                    style={{ textDecoration: "none" }}
                    className="categories-blocks-items-link"
                  >
                    read more
                  </Link>
                </div>
              </div>
              <div className="categories-line"></div>
            </div>
          ))}
        </div>

        <div>
          
           <p className="recommended-reading-header">
                  Рекомендуем к <br /> прочтению
            </p>
          {posts.map((post) => (
          <div className="recommended-reading">
            <div className="recommended-reading-block">
              <img
                className="recommended-reading-block-img"
                src={post.image}
                alt=""
              />
              <p className="recommended-reading-block-title">{post.title}</p>
              <p className="recommended-reading-block-subtitle">{post.text.slice(0,74)}...</p>
              <Link
                to={`/ReadMore/${post?._id}`}
                style={{ textDecoration: "none" }}
                className="recommended-reading-block-link"
              >
                read more
              </Link>
            </div>
            <div className="recommended-reading-line"></div>
          </div>
          ))}
        </div>
      </div>
      <div>
        <RecommendReading/>
      </div>
    </div>
  );
};
