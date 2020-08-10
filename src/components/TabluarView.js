import React from 'react';

const TabularView = (props) => {
    const { finalValueTable, deleteDoc } = props;
    return(
        <>
            {finalValueTable.length > 0 &&
                <table>
                    <thead>
                    <tr>
                        <th>Milk price for fat of 10</th>
                        <th>Milk Quantity (Ltrs)</th>
                        <th>Fat Value </th>
                        <th>Commision</th>
                        <th>Price (Rs)</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            finalValueTable.map(value => (
                                <tr key={value.uniqueId}>
                                    <td>{value.milkPrice}</td>
                                    <td>{value.milkQuantity} Litres</td>
                                    <td>{value.fatValue}</td>
                                    <td>{value.commissionAmount}</td>
                                    <td>Rs. {value.finalPrice}</td>
                                    <td className="delete" onClick={() => deleteDoc(value.uniqueId)}>Delete</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default TabularView;