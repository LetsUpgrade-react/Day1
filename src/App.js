import React from 'react';
import Button  from './Button';
import './style.css';

const Main =()=>{
    return (
        <div>
            <h1 style={{textAlign:'center',color:'white'}}>
                Hello World
            </h1>
            <p style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>
                Welcome to React Js Development Program!.
            </p>
            <div style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
            }}>
            <Button BtnInfo="Eat !" />
            <Button BtnInfo="Code !" />
            <Button BtnInfo="Sleep !" />
            <Button BtnInfo="Repeat !" />
            </div>
            <h3 style={{textAlign:'center',color:'white',fontFamily:'Lucida Console'}}>Day 1 Assignment</h3>

           
        </div>

    )
}
export default Main