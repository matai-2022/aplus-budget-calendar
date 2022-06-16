import React from 'react'
import { Link, useParams } from 'react-router-dom'

import budget from '../../data/budget'

function Detail({ balance, transactions, total }) {
  const { id } = useParams()
  const dayOfWeek = budget.find((dayObject) => dayObject.id === Number(id)).dayOfWeek
  return (
    <>
      <div className="detail-day-name">{dayOfWeek}</div>
      <div className="balance">{balance}</div>
      <table className="detail-item-table">
        <colgroup>
            <col></col>
            <col></col>
            <col className="detail-button"></col>
            <col className="detail-button"></col>
          </colgroup>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <>
                <tr>
                  <td>{transaction.description}</td>
                  <td>{transaction.amount}</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              </>
            )
          })}
        </tbody>
        <tfoot>
          <td>Total</td>
          <td>{total}</td>
          <td></td>
          <td></td>
        </tfoot>
      </table>
    </>
  )
}

export default Detail
