// create your App component here
import React,{useState,useEffect} from "react";

function App() {
    const [getRandDog, setRandDog] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setRandDog(data.message);
        });
    },[]);

    if (!getRandDog) return <p>Loading...</p>;
    return <img src={getRandDog} alt="A Random Dog" />;
}

export default App;