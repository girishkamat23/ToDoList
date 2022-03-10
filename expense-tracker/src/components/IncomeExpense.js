import React from 'react';

const IncomeExpense = () => {

return (
    <div className='inc-exp-container'>
        <div className='inc-exp-head' style={{borderRight: "solid 2px", margin:"20px"}}>
            <h4>INCOME</h4>
            <p>+&#8377;0.00</p>
        </div>
        <div className='inc-exp-head'>
            <h4>EXPENSE</h4>
            <p>-&#8377;0.00</p>
        </div>
        </div>
)

}

export default IncomeExpense;