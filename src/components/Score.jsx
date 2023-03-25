import React from 'react'
export default function Score({score}){
  return(
      <section className="score__container">
        <h2>Score Record</h2>
        <table className="score__table">
          <thead>
          <tr>
            <th>#</th>
            <th>Score</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>{score[0]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{score[1]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{score[2]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{score[3]}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{score[4]}</td>
          </tr>
          </tbody>
        </table>
      </section>
  )
}