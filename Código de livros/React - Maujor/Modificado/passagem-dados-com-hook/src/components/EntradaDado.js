import React from 'react'; 

function EntradaDado({ userName, setUserName }) {
  return <input type='text' placeholder='Seu nome' defaultValue={userName} onChange={(e) => setUserName(e.target.value)}/>;
}

export default EntradaDado;
