
import React, { useState } from 'react';

// This component takes all required input from the user
const UserInput = (props) => {

    const [userInput, setUserInput] = useState({
        milkPrice: '',
        fatValue: '',
        milkQuantity: '',
        commission: ''
    })

    const handleUserInput = (event) => {
        setUserInput({
            ...userInput,
            [event.target.name]: event.target.value
        })
    }

    // Send this value to parent/context
    const onUserInputSubmit = (event) => {
        event.preventDefault();
        props.milkDetails(userInput);
        setUserInput({
            milkPrice: '',
            fatValue: '',
            milkQuantity: '',
            commission: ''
        });
    }

    return(
        <>
        <div className="userinput-container">
            <form onSubmit={onUserInputSubmit}>
            <div>
                <label>Milk Price:</label>
                <input type="number" value={userInput.milkPrice} name="milkPrice" placeholder="What is the milk price today?" onChange={handleUserInput} />
            </div>
            <div>
                <label>Fat Value:</label>
                <input type="number" value={userInput.fatValue} name="fatValue" placeholder="What is the Fat value" onChange={handleUserInput}/>
            </div>
            <div>
                <label>Milk Quantity:</label>
                <input type="number" value={userInput.milkQuantity} name="milkQuantity" placeholder="What is the Milk Quantity" onChange={handleUserInput}/>
            </div>
            <div>
                <label>Commision per litre:</label>
                <input type="number" value={userInput.commission} name="commission" placeholder="What is the commosion per litre" onChange={handleUserInput}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
        </>
    )
}

export default UserInput;