import { useContext } from "react";

import { CountContext } from "../context/Count"
import { NameContext } from "../context/Name"

function Couter() {
  const { count, setCount } = useContext(CountContext);
  const { name, setName } = useContext(NameContext);
  return (
    <div>
      <p>Count: {count}</p>
      <br />
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>

      <form>
        <label htmlFor="nome">Digite um nome:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <p>{name}</p>
      </form>
    </div>
  );
}

export default Couter;