import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onDecrement = () => {
    if (count > 0)
    {      
      setCount(count - 1);
    }
  };


  const onIncrement = () => {
    if(count<10)
   {
         setCount(Number(count)+1);
  }
  };


  return (
    <>
      <div style={{}}>
      <h1>Counter App</h1>
        <br></br> <br></br>
      
        <button onClick={() => onDecrement()}>-</button>
        <h1>{count}</h1>
        <button onClick={() => onIncrement()}>+</button> 

        <br></br>
        {
          (count==0)? <label>Vaue cannot be less than 0.</label>: null
        }
        <br></br> <br></br>

        {
                    // style="font-size: 1px"
          (count==10)? <label style={{fontSize: '1px'}} >You have achieved the Target.</label>: null
        }
      </div>
    </>
  );
};

export default Counter;