// create your App component here
import React,{useState,useEffect} from "react";

function App() {
    const [getRandDog, setRandDog] = useState([]);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setRandDog(data.message);
        });
    },[]);
    return <div id="getRandDog"><img src="getRandDog" /></div>
}

export default App;