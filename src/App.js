
import { useState } from 'react';
import './App.css';

function App() {
  const [description, setdescription] = useState("");
  const [addDescriptiondom,setDescriptiondom]=useState("")
  
  const addDescription = (e) => {
   setdescription(e.target.value); 
  }
  const submitDescription = (e) => {
    e.preventDefault()
    setDescriptiondom(description);
  }
  return (
    <div className="App">
      <div className="addfile">
        <form action="" onSubmit={submitDescription}>
          <input type="file" />
          <textarea value={description} onChange={addDescription} name="" id="" cols="30" rows="10"></textarea>
          <input type="submit" />
        </form>
        
      </div>
      <div className="description">
          {addDescriptiondom}
        </div>
    </div>
  );
}

export default App;
