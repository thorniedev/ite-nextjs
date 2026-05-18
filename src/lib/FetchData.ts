export default async function fetchData(endpoint: string) {
  try {
    const baseURL = "https://fakestoreapi.com";

    const res = await fetch(`${baseURL}/${endpoint}`);

    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    return res.json();
    
  } catch (err) {
    console.error("Fetch error:", err);
    return []; // fallback empty array
  }
}