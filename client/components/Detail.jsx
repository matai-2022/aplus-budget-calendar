import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Detail({ budget }) {
  const { id } = useParams()
  const dayOfWeek = budget.find(
    (dayObject) => dayObject.id === Number(id)
  ).dayOfWeek
  const index = Number(id) - 1
  console.log('budget[index]', budget[index])
  const { balance, transactions, total } = budget[index]
  console.log(id, dayOfWeek, index, transactions)
  return (
    <>
      <div className="detail-day-name">{dayOfWeek}</div>
      <div className="balance">Balance: {balance}</div>
      <table className="detail-item-table">
        <colgroup>
          <col></col>
          <col></col>
          <col className="detail-button"></col>
          <col className="detail-button"></col>
        </colgroup>
        <thead>
          <tr key={`${id}-head`}>
            <th key={`${id}-head-description`}>Description</th>
            <th key={`${id}-head-amount`}>Amount</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            const { transactionId, description, amount } = transaction
            return (
              <>
                <tr key={`${id}-${transactionId}`}>
                  <td key={`${id}-${transactionId}-description`}>
                    {description}
                  </td>
                  <td key={`${id}-${transactionId}-amount`}>{amount}</td>
                  <td key={`${id}-${transactionId}-edit`}>
                    <Link to="/detail/:id/edit">
                      <button>Edit</button>
                    </Link>
                  </td>
                  {/* C doesn't know how to delete from a file */}
                  <td key={`${id}-${transactionId}-delete`}>
                    <button>Delete</button>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
        <tfoot>
          <tr key={`${id}-foot-total`}>
            <th>Total</th>
            <td>{total}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  )
}

export default Detail
