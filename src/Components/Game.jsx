import { useEffect, useState } from "react";

function Game() {
    const [joke, setJoke] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false)

    const getJoke = () => {
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            setJoke(data);
            setShowAnswer(false);
        });
    };
}

export default Game;