import { decode } from 'base64-arraybuffer';

export function bufferFromString(data) {
  if (typeof data === 'string') {
    if (data.startsWith('b64:')) {
      return new Uint8Array(decode(data.slice(4)));
    } else if (data.startsWith('hex:')) {
      const buffer = new Uint8Array(new ArrayBuffer(data.length / 2 - 2));

      let i = 0;
      data.slice(4).replace(/[a-fA-F0-9]{2}/g, (z) => {
        const value = parseInt(z, 16);
        buffer[i] = value;
        i++;
      });
      return buffer.slice(0, i);
    }
  }
  return data;
}
