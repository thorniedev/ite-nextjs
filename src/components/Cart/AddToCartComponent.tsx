'use client'

import { useState } from "react";

export default function AddToCartComponent() {
    
    // state for cart items
    const [count, setCount] = useState(0);

    // update state value for count

    return (
        <div>
            <h1>Cart: {count}</h1>
            <button className="btn btn-primary border p-4 rounded-2xl"
                onClick={() => setCount(count + 1)}
            >
                Add to Cart
            </button>

            <button className="btn btn-secondary border p-4 rounded-2xl"
                onClick={() => setCount(count - 1)}
                disabled={count === 0}
            >
                Remove from Cart
            </button>
        </div>  
    )
}