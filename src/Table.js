import React from 'react'
import { useSelector } from 'react-redux'

export default function Table() {

    const list = useSelector(state => state.Transection)
    // console.log(list)
    return (
        <>
            <div>
                <table border="1" width="100%">
                    <thead>
                        <tr>
                            <th> Name </th>
                            <th> Expense </th>
                            <th> Amount </th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map(el => {
                            return (<tr key={el}>
                                <th>{el.name}</th>
                                <th>{el.select}</th>
                                <th>{el.amount}</th>
                            </tr>)
                        })}
                    </tbody>

                </table>
            </div>
        </>
    )
}
