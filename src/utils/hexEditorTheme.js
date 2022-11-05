import hexEditorTheme from '@jixun/react-hex-editor-react-16/themes';

// background: var(--prism-background-color);
// color: var(--prism-color);
// margin-bottom: var(--ifm-leading);
// box-shadow: var(--ifm-global-shadow-lw);
// border - radius: var(--ifm - code - border - radius);

export const docHexEditorTheme = {
    ...hexEditorTheme,
    
    asciiPaddingX: 0,
    bytePaddingX: '0.1em',
    rowPaddingY: '0.1em',

    colorBackgroundCursor: '#216bb0',
    colorBackgroundCursorHighlight: '#216bb0',
    colorBackgroundInactiveCursor: '#216bb0',
    colorBackgroundInactiveCursorHighlight: '#216bb0',

    colorBackgroundSelection: '#216bb0',
    colorBackgroundSelectionCursor: '#216bb0',
    colorBackgroundInactiveSelection: '#216bb0',
    colorBackgroundInactiveSelectionCursor: '#216bb0',

    colorScrollbackTrack: 'var(--ifm-scrollbar-track-background-color)',
    colorScrollbackThumb: 'var(--ifm-scrollbar-thumb-background-color)',
    colorScrollbackThumbHover: 'var(--ifm-scrollbar-thumb-hover-background-color)',

    colorText: 'var(--prism-color)',
    colorTextColumnEven: 'var(--prism-color)',
    colorTextColumnOdd: 'var(--prism-color)',

    colorTextCursor: '#fff',
    colorTextCursorHighlight: '#fff',
    colorTextInactiveCursor: '#fff',
    colorTextInactiveCursorHighlight: '#fff',

    colorBackground: 'var(--prism-background-color)',
    colorBackgroundColumnEven: 'var(--prism-background-color)',
    colorBackgroundColumnOdd: 'var(--prism-background-color)',
    colorTextEven: 'var(--prism-color)',
    colorTextOdd: 'var(--prism-color)',
    colorTextRowEven: 'var(--prism-color)',
    colorTextRowOdd: 'var(--prism-color)',

    // Other rows
    colorBackgroundOdd: 'var(--prism-background-color)',
    colorBackgroundEven: 'var(--prism-background-color)',

    colorBackgroundLabel: 'var(--prism-background-color)',
    colorBackgroundLabelCurrent: 'var(--prism-background-color)',
    colorTextLabel: 'var(--ifm-color-content)',
    colorTextLabelCurrent: 'var(--ifm-color-primary)',


    // Current row
    colorBackgroundRowEven: 'var(--prism-background-color)',
    colorBackgroundRowOdd: 'var(--prism-background-color)',

    colorTextSelection: '#fff',
    colorTextSelectionCursor: '#fff',
    colorTextInactiveSelection: '#fff',
    colorTextInactiveSelectionCursor: '#fff',

    fontFamily: 'var(--ifm-font-family-monospace)',
    fontSize: '16px',
    gutterWidth: '0.5em',
    cursorBlinkSpeed: '0.5s',
    labelPaddingX: '0.5em',
    scrollWidth: 'auto',
    textTransform: 'uppercase',
    
};
