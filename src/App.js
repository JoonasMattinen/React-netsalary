import './App.css';

function App() {
  return (
    <div>
      <form action="">
        <h3>Laske nettopalkka</h3>
        <div>
          <label>Nettopalkka</label>
          <input type="number" />
        </div>
        <div>
          <label>Vero</label>
          <input type="number" />
        </div>
        <div>
          <label>Työeläke</label>
          <select>
            <option>0.25%</option>
            <option>0.50%</option>
            <option>0.75%</option>
            <option>1.00%</option>
          </select>
        </div>
        <div>
          <label>Työttömyysvakuutus</label>
          <select>
            <option>0.25%</option>
            <option>0.50%</option>
            <option>0.75%</option>
            <option>1.00%</option>
          </select>
        </div>
        <div>
          <label>Nettopalkka</label>
          <output></output>
        </div>
        <button>Laske</button>
      </form>

    </div>
  );
}

export default App;
