import { useContext } from "react";

import { CountContext } from "../context/Count"


function Mirror() {
  const { count } = useContext(CountContext);
  return (
    <div>
      <p>Espelho: {count}</p>
    </div>
  );
}

export default Mirror;