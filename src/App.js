import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const countWords = () => {
    const words = text.split(' ');
    return words.filter(word => word !== '').length;
  };

  const main = {
    display:"flex",
    justifyContent:"center",
    padding:"200px",
    fontFamily: "Times New Roman, serif",
    backgroundColor:"beige",
    height:"100vh"
  }
  const myStyle = {
    display:"flex",
    flexWrap:"wrap",
    width:"400px",
    padding:"50px",
    backgroundColor:"white"
  }
  return (
    <div style={main}>
      <div style={myStyle}>
      <h1 style={{textAlign:"center"}}>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter your paragraph here."
        onChange={handleTextChange}
        value={text}
      ></textarea>
      <p>Word Count: {countWords()}</p>
    </div>
    </div>
    
  );
}

export default WordCounter;
