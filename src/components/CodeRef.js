import React from 'react';

export default function CodeRef({ file, at = 'main' }) {
  const url = `https://github.com/parakeet-rs/parakeet-crypto-rs/blob/${at}/${file}`;
  return (
    <a href={url}>
      <code>{file}</code>
    </a>
  );
}
