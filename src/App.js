import './App.css';
import Options from './components/Options';

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
            <Options/>
          </select>
        </div>
        <div>
          <label>Työttömyysvakuutus</label>
          <select>
            <Options/>
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
