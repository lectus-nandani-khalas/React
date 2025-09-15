import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "2px solid",
    padding: "20px"
  });

  const [btntext, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid",
        padding: "20px"
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "1px solid",
        padding: "20px"
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          {[1, 2, 3].map((item) => (
            <div className="accordion-item" key={item}>
              <h2 className="accordion-header" id={`heading${item}`}>
                <button
                  className={`accordion-button ${item !== 1 ? 'collapsed' : ''}`}
                  style={myStyle}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${item}`}
                  aria-expanded={item === 1 ? 'true' : 'false'}
                  aria-controls={`collapse${item}`}
                >
                  Accordion Item #{item}
                </button>
              </h2>
              <div
                id={`collapse${item}`}
                className={`accordion-collapse collapse ${item === 1 ? 'show' : ''}`}
                aria-labelledby={`heading${item}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the accordion body for item #{item}.</strong> You can modify this content and style it using custom CSS or Bootstrap classes.
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container my-3">
          <button type="button" onClick={toggleStyle} className="btn btn-primary">
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}
 