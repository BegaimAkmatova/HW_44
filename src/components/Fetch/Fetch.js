import React,{useState, useEffect} from "react";
import Card from "../UI/Card";
import classes from './Fetch.module.css'

const Fetch = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
            .then((response) => response.json())
            .then((json) => setCards(json))
    }, []);

    return(
            <div className={classes['card-one']}>
          {cards.map((item) => {
        return (
           <Card>
               <div>
              <div className={classes['card-two']}>
                <h1>{item.albumId}</h1>
                <p>{item.id}</p>
              </div>
              <span>{item.title}</span>
              <div className={classes['card-three']}>
                <h6>{item.url}</h6>
              </div>
            </div>
           </Card>
        );
      })}
    </div>
  );
}    

export default Fetch;