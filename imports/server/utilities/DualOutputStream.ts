/**
 * A utility class made to write to a file while answering a file download request
 * By Zied Hamdi: https://stackoverflow.com/a/47186436/1090626
 */

export default class DualOutputStream implements NodeJS.WritableStream {
  writable = true;
  constructor(private streamOne, private streamTwo) {
  }

  setHeader(header, value) {
    if (this.streamOne.setHeader) {
      this.streamOne.setHeader(header, value);
    }
    if (this.streamTwo.setHeader) {
      this.streamTwo.setHeader(header, value);
    }
  }

  write(chunk) {
    this.streamOne.write(chunk);
    this.streamTwo.write(chunk);
    return true;
  }

  end() {
    this.streamOne.end();
    this.streamTwo.end();
  }

  addListener(event: string | symbol, listener: (...args: any[]) => void): this {
    return undefined;
  }

  emit(event: string | symbol, ...args: any[]): boolean {
    return false;
  }

  eventNames(): Array<string | symbol> {
    return undefined;
  }

  getMaxListeners(): number {
    return 0;
  }

  listenerCount(type: string | symbol): number {
    return 0;
  }

  listeners(event: string | symbol): Function[] {
    return undefined;
  }

  on(event: string | symbol, listener: (...args: any[]) => void): this {
    return undefined;
  }

  once(event: string | symbol, listener: (...args: any[]) => void): this {
    return undefined;
  }

  prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
    return undefined;
  }

  prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this {
    return undefined;
  }

  rawListeners(event: string | symbol): Function[] {
    return undefined;
  }

  removeAllListeners(event?: string | symbol): this {
    return undefined;
  }

  removeListener(event: string | symbol, listener: (...args: any[]) => void): this {
    return undefined;
  }

  setMaxListeners(n: number): this {
    return undefined;
  }

}
