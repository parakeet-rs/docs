import React from 'react';
import HexEditor from '@jixun/react-hex-editor-react-16';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { bufferFromString } from '../utils/bufferFromString';
import { docHexEditorTheme } from '../utils/hexEditorTheme';

export default function HexViewer({
  data = [],
  height = 0,
  showAscii = true,
  hideRowHeader = false,
  hideColHeader = false,
}) {
  const byteData = bufferFromString(data);

  return (
    <ErrorBoundary
      fallback={({error, tryAgain}) => (
        <div>
          <p>This component crashed because of error: {error.message}.</p>
          <button onClick={tryAgain}>Try Again!</button>
        </div>
      )}>
      <HexEditor
        className='hex-viewer'
        showRowLabels={!hideRowHeader}
        showColumnLabels={!hideColHeader}
        columns={16}
        height={height || (Math.ceil(byteData.length / 16) * 32 + 32)}
        data={byteData}
        showAscii={showAscii}
        theme={{ hexEditor: docHexEditorTheme }}
      />
    </ErrorBoundary>
  );
}
