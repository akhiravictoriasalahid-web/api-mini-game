import { useEffect, useState } from "react";
import "./Game.css";

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

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div className="container">
            <h1>Joke Generator</h1>

            {joke && (
                <>
                <p><strong>Question:</strong> {joke.setup}</p>

                {showAnswer && (
                    <p><strong>Answer:</strong> {joke.punchline}</p>
                )}
                </>
            )}

            <button onClick={() => setShowAnswer(true)}>
                Show Answer
            </button>

            <br /><br />

            <button onClick={getJoke}>
                Next Joke
            </button>
        </div>
    );
}

export default Game;