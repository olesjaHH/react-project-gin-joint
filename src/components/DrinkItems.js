const DrinkItems = (props) => {
    console.log(props)
    return ( 
        <figure>
            <img src={props.image} alt="" />
            <figcaption>
                <h4>{props.description}</h4>
                <p>{props.name}</p>
            </figcaption>
        </figure>
     );
}
 
export default DrinkItems;