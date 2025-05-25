import { useState } from 'react';
import styles from './product.module.css'


const product = (props) => {

    const[title, setTitle] = useState(props.title);

    const productClickListener = () => {
        console.log("Product Clicked")
        // change product name to "anonymous"
        setTitle("anonymous");
    }

    return <figure onClick={productClickListener} className={styles.product}>
        <img width="200" src={props.image}/>
        <figcaption>
            <h2>{title}</h2>
            <h3>{props.price}</h3>
            <p>{props.description}</p>
            <button>Buy Now</button>
        </figcaption>
    </figure>
}

export default product;