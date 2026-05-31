
import { NextResponse } from "next/server";

export async  function GET() {
    // logic fetching data from database or other source

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
  )
    const data = await res.json();

    if(res?.ok) {
        return NextResponse.json({
            success: true,
            data,
            status: 200
        });
    }
    return NextResponse.json({error: 'Failed to fetch data'}, {status: 500});
}
