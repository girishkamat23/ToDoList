import React, {useState} from "react"


const HOC = (wrappedComponent) => {
    const WrappedComponent = () => {
        const [count, setCount] = useState(0);
        
        const onClicker = () => {
        setCount(count+1);
        }

        return (
            <WrappedComponent counter={count} onClick={onClicker} / >
        )
    }

    return WrappedComponent
}

export default HOC;