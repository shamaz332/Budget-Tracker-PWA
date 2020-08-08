import React, { useContext } from 'react';

// Import the Global Context
import { GlobalContext } from './../../context/GlobalState';

// Import Transactions
import { Transaction } from './TraChild'

export const TransSectionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}