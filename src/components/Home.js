import EventItems from "./EventItems";
import DrinkItems from "./DrinkItems";
import Items from "./Items";
import eventData from "../data/events.json";
import drinkData from "../data/drinks.json";

const Home = () => {
    return (
    <div className="Home">
        <section className="head">
            <h1>A CLASSIC <span className="gin-head">GIN JOINT</span> NEW YORK</h1>
        </section>
        <section className="story">
            <Items 
            title="About"
            title2="THE STORY OF BATHUB GIN"
            text="Gin was the predominant drink in the United States during the Prohibition-Era 1920's and many variations were created. 'Bathtub gin' was developed in response to the poor-quality of alcohol that was available at the time."
            value="Read More"
            img="./img/HomeBar.png"
            />
        </section>
        <section className="events">
            <p className="events-head">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. Stay tuned for updates on our reopening date and new events, coming soon!</p>
            <article className="event-item">
            {eventData.map((singleEvent, i) => <EventItems 
                key={i}
                image={singleEvent.img}
                title={singleEvent.title}
                title2={singleEvent.title2}
                day={singleEvent.day}
                time={singleEvent.time}
                description={singleEvent.description}
            />)}
            </article>
          </section>
          <section className="menu">
                <Items 
                title="Cocktail & Food Menus"
                title2="Hand Crafted Cocktails & Damn Good Eats"
                text="We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes."
                value="See Menus"
                img="./img/Home_Rectangle (3).png"
                />
          </section>
          <section className="drinks">
            <article className="drink-item">
                {drinkData.map((singleEvent, i) => <DrinkItems 
                    key={i}
                    image={singleEvent.img}
                    description={singleEvent.description}
                    name={singleEvent.name}
                />)}
                </article>
          </section>
    </div>
    );
}

export default Home;