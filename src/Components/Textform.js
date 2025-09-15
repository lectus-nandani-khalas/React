
import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState("Enter text  here");
    const [wordPercentages, setWordPercentages] = useState([]);

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };
const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
        // props.showAlert("Text Changed","success"); --- IGNORE ---
    };

    const clearText = () => {
        setText("");
        setWordPercentages([]);
        props.showAlert("Text Cleared","success");
    };

    const GivePercentage = () => {
        if (!text.trim()) {
            setWordPercentages([]);
            return;
        }
        const words = text.trim().split(/\s+/);
        const total = words.length;
        const counts = {};
        words.forEach(word => {
            const w = word.toLowerCase();
            counts[w] = (counts[w] || 0) + 1;
        });
        const percentages = Object.entries(counts).map(([word, count]) => ({
            word,
            percent: ((count / total) * 100).toFixed(2)
        }));
        setWordPercentages(percentages);
    };

    return (
        <>
            <h1 style={{color: props.mode === 'dark' ? 'white' : ' black'}}>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control " value={text} onChange={handleOnChange} style={ {backgroundColor: props.mode === 'dark' ? 'gray':'white' , color: props.mode === 'dark' ? 'white' : ' black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div className="my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={clearText}>Clear Text</button>
            <button className="btn btn-primary mx-3" onClick={GivePercentage}>GivePercentage</button>
            <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
            {wordPercentages.length > 0 && (
                <div className="container my-3">
                    <h2>Word Percentages</h2>
                    <ul>
                        {wordPercentages.map(({ word, percent }) => (
                            <li key={word}>{word}: {percent}%</li>
                        ))}
                    </ul>
                </div>
            )}
            
            <div className='container my-3'>
                <h1>Your text Summary</h1>
                <p> text= {text.split(" ").length} chars= {text.length}</p>
            </div>
            <div className='container my-3'>
                <p>{0.005 * text.split(" ").length} Minutes Read</p>
            </div>
            <div className='container my-3'>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            </div>
        </>
    );
}
