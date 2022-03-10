import React, { useState } from 'react';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onChangeTxt = (e) => {
        setText(e.target.value);
    }

    const onChangeAmt = (e) => {
        setAmount(e.target.value);
    } 
    
    
    return (
        <>
        <h3>Add Transaction</h3>
        <hr />
        <form>
            <div className='trans-div'>
                <label for='text'>Transaction Name</label><br/>
                <input type='text' placeholder='Enter Text...' value={text} onChange={onChangeTxt}></input>
            </div>
            <div className='trans-div'>
                <label for='amount'>Amount <br/>
                (negative - expense, positive - income)
                </label><br/>
                <input type='number' placeholder='Enter Amount...' value={amount} onChange={onChangeAmt}></input>
            </div>
            <br/>
            <button className='trans-btn'>Add Transaction</button>
        </form>                       
        </>
    )
}

export default AddTransaction;