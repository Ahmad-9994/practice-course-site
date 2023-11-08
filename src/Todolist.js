import { useState } from "react"

function Todo() {

    const [data, setData] = useState()
    const [number, setNumber] = useState([])


    function abc(e) {
        return (
            setData(e.target.value)
        )
    }

    function add() {

        setNumber([...number, data])
        setData("")

    }

    function removeNumber(i) {

        number.splice(i, 1);
        setNumber([...number])
    }

    function mapping(list, i) {

        return (

            
                <div className="addlist">
                    <div key={i}>
                        <h2>{list}</h2>
                    </div>
                    <div>
                    <button className="btn2" onClick={() => removeNumber(i)}>remove</button>
                    </div>
                </div>

           


        )
    }
    return (
        <>
            <input type="text" placeholder="write here" value={data} onChange={abc} />

            <button className="btn1" onClick={add}>add</button>

            {number.map(mapping)}
        </>
    )
}

export default Todo