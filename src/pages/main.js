import React from 'react';
import Select from 'react-select';  

const Main = () => {
 
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Рабочий стол</h1>
       <p>Выполненные задачи</p>  
       <select name="selectedFruit" defaultValue={['Иванов', 'Петров', 'Сидоров']}>  
        <option value="ivanov">Иванов</option>  
        <option value="petrov">Петров</option>  
        <option value="sidirov">Сидоров</option>  
       </select>    
       
               
     </div>  
            
  );
};

export default Main;