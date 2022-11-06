import React from 'react';
import HexEditor from '@jixun/react-hex-editor-react-16';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { bufferFromString } from '../utils/bufferFromString';
import { docHexEditorTheme } from '../utils/hexEditorTheme';

export default function HexViewer({
  title = '',
  data = [],
  height = 0,
  showAscii = true,
  hideRowHeader = false,
  hideColHeader = false,
}) {
  const byteData = bufferFromString(data);
  let actualHeight = height || Math.ceil(byteData.length / 16) * 30 + 30;
  actualHeight = Math.min(actualHeight, 300);

  return (
    <ErrorBoundary
      fallback={({ error, tryAgain }) => (
        <div>
          <p>This component crashed because of error: {error.message}.</p>
          <button onClick={tryAgain}>Try Again!</button>
        </div>
      )}
    >
      <section className="hex-viewer-container">
        {title}
        <HexEditor
          className="hex-viewer"
          showRowLabels={!hideRowHeader}
          showColumnLabels={!hideColHeader}
          columns={16}
          height={actualHeight}
          data={byteData}
          showAscii={showAscii}
          theme={{ hexEditor: docHexEditorTheme }}
        />
      </section>
    </ErrorBoundary>
  );
}
