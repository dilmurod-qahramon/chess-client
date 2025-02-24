import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sideToColor',
  standalone: false,
})
export class SideToColorPipe implements PipeTransform {
  transform(value: 'left' | 'right' | undefined): 'black' | 'white' {
    if (value == 'left') return 'white';
    return 'black';
  }
}
