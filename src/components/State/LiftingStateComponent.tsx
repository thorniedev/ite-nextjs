'use client'
import { useState, Dispatch, SetStateAction } from "react";

export default function LiftingStateComponent() {

  const [amount, setAmount] = useState(0);

  return (
    <div>
        
        <h1>Lifting State Example</h1>

        <ChildA setAmount={setAmount} />

        <ChildB amount={amount} />

    </div>
  )
}

// Update on ChildA component to update on ChildB
function ChildA({ setAmount }: { setAmount: Dispatch<SetStateAction<number>> }) {
    return (
        <div>
            <button className="btn btn-primary border p-4 rounded-2xl"
                onClick={() => setAmount((prev) => prev + 1)}
            >
                Increment Amount
             </button>

             <button className="btn btn-secondary border p-4 rounded-2xl"
                onClick={() => setAmount(0)}
            >
                Reset Amount
            </button>
        </div>
    )
}

function ChildB({amount}: {amount: number}) {
    return (
        <div>
            <h1>Child B</h1>
            <p>Amount: {amount}</p>
        </div>
    )
}


