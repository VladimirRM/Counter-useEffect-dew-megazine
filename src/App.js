import { Button } from "react-bootstrap";
import "./App.css";

function App() {

const handleIntervalClick =()=>{
  
}

  return (
    <div className="container">
      <Timer intervalValue={intervalValue}></Timer>
      <Button variant="primary" onClick={() => handleIntervalClick(100)}>
        100ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(500)}>
        500ms
      </Button>
      <Button variant="primary" onClick={() => handleIntervalClick(1000)}>
        1s
      </Button>
    </div>
  );
}

export default App;
