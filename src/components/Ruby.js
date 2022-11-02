import React from 'react';

export default function Ruby({ children, caption }) {
  return (
    <ruby>
      { children }
      <rp>(</rp>
      <rt>{ caption }</rt>
      <rp>)</rp>
    </ruby>
  );
}
