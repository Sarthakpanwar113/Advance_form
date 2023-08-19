import './App.css';

function App() {

  function changeHandler(event) {
  return {
    [event.target.name]: event.target.value
  }
  }
  return (
    <div className="App">
      <form>
        <br></br>
        <br></br>
        <label htmlFor='naamdaal'>name</label>
        

        
        <input type='text' placeholder='first name'
        id='naamdaal'
        onChange={changeHandler}   
             
        />










      </form>








    </div>
  );
}

export default App;
