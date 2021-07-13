import style from './Book.module.css';

function Book(props){

    // if(!props.title){
    //     return <article>
    //         <p>No info provided</p>
    //     </article>
    // }
    return(
        <article className={style.article}>
            <h3 onClick={props.clickHandler}>{props.title ? props.title : 'No title provided'}</h3>
            <span className={style.description}>{props.description || 'Default Description'}</span>
            <p className={style.author}>{props.author || 'Author unknown'} </p>
        </article>
    );
}

export default Book;