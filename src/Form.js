import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtransection } from './features/counter/TransectionReducer'

export default function Form() {

    const [name, setname] = useState("")
    const [select, setselect] = useState("")
    const [amount, setamount] = useState("")

    const dispatch = useDispatch();


    return (
        <>


            <div>
                <input type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                &nbsp;&nbsp;

                <select type="select"
                    value={select}
                    onChange={(e) => setselect(e.target.value)}
                >
                    <option value="select">select</option>
                    <option value="debit">debit</option>
                    <option value="credit">credit</option>
                </select>
                &nbsp;&nbsp;

                <input type="text"
                    value={amount}
                    onChange={(e) => setamount(e.target.value)}
                />
                &nbsp;&nbsp;

                <button onClick={() => {
                    dispatch(addtransection(
                        {
                            name, select, amount,
                        }
                    ))
                }} > submit </button>

            </div>

        </>
    )
}
