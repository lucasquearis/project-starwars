import React from 'react';
import Data from '../hooks/Data';

function Table() {
  const [data] = Data([]);
  if (!data.results) {
    return (<h1>Loading...</h1>);
  }
  const resultsWithoutResidents = Object.keys(data.results[0])
    .filter((item) => item !== 'residents');
  // Aprendi a fazer a table com o Jossany e David Gonzaga!!
  return (
    <table>
      <thead>
        <tr>
          {resultsWithoutResidents.map((key) => <th key={ key }>{ key }</th>)}
        </tr>
      </thead>
      <tbody>
        {data.results.map((planet) => (
          <tr key={ planet.name }>
            {resultsWithoutResidents.map((result) => (
              <td
                key={ planet[result] }
              >
                {planet[result]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
