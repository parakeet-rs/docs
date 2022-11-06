import React from 'react';
import HexEditor from '@jixun/react-hex-editor-react-16';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import { bufferFromString } from '../utils/bufferFromString';
import { docHexEditorTheme } from '../utils/hexEditorTheme';
import {
  useWindowWidth,
  BREAK_POINT_SMALL,
  BREAK_POINT_MEDIUM,
} from '../hooks/useIsSmallWidthScreen';

export default function HexViewer({
  title = '',
  data = [],
  height = 0,
  showAscii = true,
  hideRowHeader = false,
  hideColHeader = false,
}) {
  const wwidth = useWindowWidth();
  const colWidth =
    wwidth <= BREAK_POINT_SMALL ? 4 : wwidth <= BREAK_POINT_MEDIUM ? 8 : 16;

  const byteData = bufferFromString(data);
  let actualHeight = height || Math.ceil(byteData.length / colWidth) * 30 + 30;
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
          readOnly
          className="hex-viewer"
          showRowLabels={!hideRowHeader}
          showColumnLabels={!hideColHeader}
          columns={colWidth}
          height={actualHeight}
          data={byteData}
          showAscii={showAscii}
          theme={{ hexEditor: docHexEditorTheme }}
        />
      </section>
    </ErrorBoundary>
  );
}
