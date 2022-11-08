import React from 'react';
import Ruby from '../components/Ruby';

export function Term({ caption, children }) {
  return <Ruby caption={caption}>{children}</Ruby>;
}
