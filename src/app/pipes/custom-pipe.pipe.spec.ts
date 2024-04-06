import { capitalizePipe } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new capitalizePipe();
    expect(pipe).toBeTruthy();
  });
});
