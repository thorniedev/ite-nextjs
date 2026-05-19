'use client'

import { useState } from "react";

export default function SelectState() {

  const [size, setSize] = useState<string>();

  return (
    <div>
        <select name="" id=""
            onChange={(e)=> setSize(e.target.value)}
        >
            <option value="">Select Size</option>
            <option value="MD">md</option>
            <option value="L">l</option>
        </select>

        <h1>Seleted: {size}</h1>
    </div>
  )
}
