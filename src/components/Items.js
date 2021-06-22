const Items = (props) => {
    return ( 
        <div className="pop-item">
            <article>
                <h4>{props.title}</h4>
                <h2>{props.title2}</h2>
                <p>{props.text}</p>
                <input type="button" value={props.value} />
            </article>
            <figure>
                <img src={props.img} alt="" />
            </figure>
        </div>
     );
}
 
export default Items;