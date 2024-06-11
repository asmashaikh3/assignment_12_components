import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyButton from './components/MyButton/MyButton';
import Label from './components/Label/Label';
import Text from './components/Text/Text';
import Dropdown from './components/Dropdown/Dropdown';
import Card from './components/Card/Card';

function App() {
  const [count, setCount] = useState(0);

  const dropdownOptions = [
    { value: 'projects', label: 'Projects' },
    { value: 'experience', label: 'Experience' },
    { value: 'education', label: 'Education' }
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MyButton disabled={false}>Asma Shaikh</MyButton>
      <Label>I am a first class full stack web developer</Label>
      <Text>"Welcome! I’m Asma, a passionate Web Developer dedicated to creating impactful web solutions. With a background in web development, I specialize in teck field. Explore my portfolio to see my latest projects and get in touch to collaborate!"</Text>
      <Dropdown options={dropdownOptions} disabled={false} />
      <Card disabled={false}>completed my full stack web development degree from Red River College Polytechnic</Card>
    </>
  );
}

export default App;