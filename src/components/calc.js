import React, { useState } from "react";
import * as math from "mathjs"; 
const Calculator=()=>{
    const [inp,setInp]=useState("");

    const Handle=(e)=>{
        setInp(inp.concat(e.target.name))
    }
    const Clear=()=>{
        setInp("")
    }
    const Back=()=>{
        setInp(inp.slice(0,-1))
    }
    const cal=()=>{
        try{
            const result = math.evaluate(inp);
    setInp(result.toString());
        }catch(err){
            setInp("ERROR")
        }
    }
    return(
        <div className='Container'>
            <div>
                <input type="text" value={inp} placeholder="0"/>
            </div>
            <div className="key">
            <button onClick={Clear} id='clear'>Clear</button>
            <button onClick={Back} id="back">C</button>
            <button name="/" onClick={Handle}>&divide;</button>
            <button name="7" onClick={Handle}>7</button>
            <button name="8" onClick={Handle}>8</button>
            <button name="9" onClick={Handle}>9</button>
            <button name="*" onClick={Handle}>&times;</button>
            <button name="4" onClick={Handle}>4</button>
            <button name="5" onClick={Handle}>5</button>
            <button name="6" onClick={Handle}>6</button>
            <button name="-" onClick={Handle}>&ndash;</button>
            <button name="1" onClick={Handle}>1</button>
            <button name="2" onClick={Handle}>2</button>
            <button name="3" onClick={Handle}>3</button>
            <button name="+" onClick={Handle}>+</button>
            <button name="0" onClick={Handle}>0</button>
            <button name="." onClick={Handle}>.</button>
            <button onClick={cal} id="equal">=</button>
            </div>
        </div>
    )
}
export default Calculator;