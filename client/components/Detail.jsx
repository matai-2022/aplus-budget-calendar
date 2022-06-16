import React from 'react'

function Detail({transactions}) {
  return (
    <>
    <div className="detail-day-name">Monday</div>
    <table className="detail-item-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Coffee</td>
          <td>-$4.50</td>
        </tr>
        <tr>
          <td>Wages</td>
          <td>$1000</td>
        </tr>
      </tbody>
      <tfoot>
        <td>Total</td>
        <td>$950.50</td>
      </tfoot>
    </table>
    </>
  )
}

export default Detail