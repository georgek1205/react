import { Link } from 'react-router-dom';
import style from './Post.module.css'

export default function Post(props){
    return (
    <li className={style.post}>
        <Link to={props.id}>
            <p className={style.author}>{props.author}</p>
            <p className={style.text}>{props.body}</p>
        </Link>
    </li>
    );

}
