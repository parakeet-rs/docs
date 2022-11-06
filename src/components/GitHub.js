import React from 'react';

export default function GitHub(props) {
  if (!props.path && typeof props.children === 'string') {
    const path = props.children.replace(/^\/+/, '');
    let name;
    const segments = path.split('/');
    if (segments.length === 1) {
      name = `@${path}`;
    } else if (segments.length === 2) {
      name = path;
    } else {
      name = segments[segments.length - 1];
    }

    let branch;
    if (segments[2] === 'blob' && segments[3]) {
      branch = segments[3];
    }

    return (
      <GitHub path={path}>
        <code>
          {name}
          {branch && <small> (@{branch})</small>}
        </code>
      </GitHub>
    );
  }

  return <a href={'https://github.com/' + props.path}>{props.children}</a>;
}
