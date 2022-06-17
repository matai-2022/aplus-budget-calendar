import React from 'react'
import { Link, useParams } from 'react-router-dom'

import formatter from '../formatter'
import balFormatter from '../balFormatter'

function Detail({ budget }) {
  const { id } = useParams()
  const dayOfWeek = budget.find(
    (dayObject) => dayObject.id === Number(id)
  ).dayOfWeek
  const index = Number(id) - 1
  const { balance, transactions, total } = budget[index]
  return (
    <>
      <div className="detail-day-name">{dayOfWeek}</div>
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
          <tr>
            <td>Balance</td>
            <td>{balFormatter(balance)}</td>
            <td></td>
            <td></td>
          </tr>
          {transactions.map(({ transactionId, description, amount }) => (
            <tr key={`${id}-${transactionId}`}>
              <td>{description}</td>
              <td>{formatter(amount)}</td>
              <td>
                <Link to="/detail/:id/edit">
                  <button>Edit</button>
                </Link>
              </td>
              {/* C doesn't know how to delete from a file */}
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>{formatter(total)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default Detail
