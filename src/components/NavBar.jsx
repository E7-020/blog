import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../style/nav-bar.css';
import { useDispatch } from 'react-redux';
import { uploadCategories} from '../redux/reducers/categoriesReducer';
import { useEffect } from 'react';
import { Audio } from  'react-loader-spinner'
  

export const NavBar = () => {
    const {categories, isLoading} = useSelector(state => state.categoriesReducer)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(uploadCategories());
    }, []);
    if(isLoading){
        return (
        <Audio
            height = "80"
            width = "80"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle
            wrapperClass
        />
        )

    }

    return(
        <div>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className='nav-bar-text'>
                    <div className='nav-bar-text-block'>
                     <p className='nav-bar-first-text'>THE</p>  
                    </div>
                    <div >
                     <p className='nav-bar-second-text'>Unicode</p>  
                    </div>
                </div>
            </Link>

            <div className='nav-bar-second-block'>
                {categories.map((cat) => (
                <div key={cat._id}>
                    <NavLink to={`/Categories/${cat._id}`} className={({isActive}) => "nav-bar-second-block-link" + (isActive ? " active" : "")} >
                        <span>{cat.title}</span>
                    </NavLink>
                </div>
                ))}
            </div>
            <div className="line"></div>
        </div>
    )
}