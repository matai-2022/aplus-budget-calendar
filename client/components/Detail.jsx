import React from 'react'
import { Link, useParams } from 'react-router-dom'

import budget from '../../data/budget'

function Detail({ balance, transactions, total }) {
  const { id } = useParams()
  const dayOfWeek = budget.find((dayObject) => dayObject.id === id).dayOfWeek
  return (
    <>
      <div className="detail-day-name">{dayOfWeek}</div>
      <div className="balance">{balance}</div>
      <table className="detail-item-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <>
                <tr>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                </tr>
              </>
            )
          })}
        </tbody>
        <tfoot>
          <td>Total</td>
          <td>{total}</td>
        </tfoot>
      </table>
      <Link to="/detail/:id/edit">Edit</Link>
    </>
  )
}

export default Detail
