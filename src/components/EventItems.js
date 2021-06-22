const EventItems = (props) => {
    console.log(props)
    return ( 
        <article>
            <figure>
                <img src={props.image} alt="" />
                <figcaption>
                    {props.title} <br/>
                    {props.title2}
                </figcaption>
            </figure>
            <h3>
                <div>{props.day}</div>
                <div>{props.time}</div>
            </h3>
            <p>{props.description}</p>
        </article>
     );
}
 
export default EventItems;