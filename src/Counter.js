
import './counter.css'
import { useState } from "react";

export default function Counter(){

    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);

    function handleSlider(e){
        setStep(Number(e.target.value));
    }
    
    const date = new Date();
    date.setDate(date.getDate() + count);

    return(
        <div className='counter-container'>
            <div className="heading">
                <h1>Date counter</h1>
            </div>
            <div className='step-container'>
                <input type='range' min='0' max='10' value={step} onChange={handleSlider}/>
                <p>{step}</p>
                
            </div>
            <div className='count-container'>
                <button onClick={()=>{setCount(count-step);}}>-</button>
                <input type="text" value={count} id='count' onChange={(e)=>{setCount(Number(e.target.value))}}/>
                <button onClick={()=>{setCount(count+step);}}>+</button>
            </div>
            <div className='date-container'>
                <span>{count===0? "Today is " : count>0 ? `${count} days from today is ` : `${count} days ago was `}</span>
                <span>{date.toDateString()}</span>
            </div>
            {(count>0&&step>0)?
            <div className='reset'>
                <input type='reset' onClick={()=>{ setStep(0); setCount(0);}}/>
            </div>:null}
        </div>
    );
}