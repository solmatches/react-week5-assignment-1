import React from 'react';

export default function RegionList({ regions, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button type="button" onClick={onClick} >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
