import { SideToColorPipe } from './side-to-color.pipe';

describe('SideToColorPipe', () => {
  const pipe = new SideToColorPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return white when value is left', () => {
    expect(pipe.transform('left')).toEqual('white');
  });

  it('should return black when value is right', () => {
    expect(pipe.transform('right')).toEqual('black');
  });
});
