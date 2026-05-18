
// Fetch Data from fake store API

const baseURL = "https://fakestoreapi.com";    

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${baseURL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
    catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};