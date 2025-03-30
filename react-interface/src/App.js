import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CodeBox from './components/code-box';
import QuestionBubble from './components/question-bubble';

function App() {
  const [problemText, setProblemText] = useState('');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [problemNumber, setProblemNumber] = useState(1);
  const [solution, setSolution] = useState('');

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/problem/${problemNumber}`);
        setProblemText(response.data.code);
      } catch (error) {
        setProblemText('Failed to retrieve problem.');
      }
    };

    fetchProblem(); 

  }, [problemNumber]); 

  const fetchCodeAndSolution = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/code/${problemNumber}`);
      setCodeSnippet(response.data.code);
      setSolution(response.data.solution || 'No solution available');
    } catch (error) {
      setCodeSnippet('Failed to retrieve code.');
      setSolution('Failed to retrieve solution.');
    }
  };

  useEffect(() => {
    setProblemText('');
    setCodeSnippet(''); 
    setSolution(''); 
  }, [problemNumber]); 

  return (
    <div className="App">
      <div className="logo-line">
        <img src="logo.jpg" alt="Logo" className="logo-image" />
      </div>
      <div className="content-wrapper">
        <div className="content-line">
          <div className="content-column">
            <div className="form-group">
              <label className="problem-label" htmlFor="problem-number">
                Problem number:
                <input
                  type="number"
                  id="problem-number"
                  name="problem-number"
                  className="problem-input"
                  value={problemNumber}
                  onChange={(e) => setProblemNumber(e.target.value)}
                />
              </label>
            </div>
            <QuestionBubble text={problemText} />
          </div>
          <div className="content-column">
            <CodeBox code={codeSnippet} />
            <div className='content-sub-line'>
              <button className="button" onClick={fetchCodeAndSolution}>
                Retrieve code and solution
              </button>
              <h4>Solution:</h4>
              <p>{solution}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="name-line">
        <p className="name">Created by Lucas Marques Felix</p>
      </div>
    </div>
  );
}

export default App;