import { useState } from 'react';
import './App.css';
import Options from './components/Options';


function App() {

  const [salary, setSalary] = useState("")
  const [tax, setTax] = useState(0)
  const [pension, setPension] = useState(0)
  const [insurance, setInsurance] = useState(0)
  const [netSalary, setNetSalary] = useState(0)

  const [taxPayment, setTaxPayment] = useState(0)
  const [pensionPayment, setPensionPayment] = useState(0)
  const [insurancePayment, setInsurancePayment] = useState(0)

  function calculateTax(value){
    setTax(value)
    setTaxPayment(salary / 100 * value)
  }

  return (
    <div>
      <form action="">
        <h3>Laske nettopalkka</h3>
        <div>
          <label>Bruttopalkka</label>
          <input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
        <div>
          <label>Vero</label>
          <input type="number" value={tax} onChange={e => calculateTax(e.target.value)}/>
          <output>{taxPayment}€</output>
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
