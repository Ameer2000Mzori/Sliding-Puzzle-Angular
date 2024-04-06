import { computeMsgId } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePipe',
  standalone: true,
})
export class capitalizePipe implements PipeTransform {
  transform(value: string, args: string): any {
    switch (args) {
      case 'toUpper':
        value = value.toUpperCase();
        return value;

      case 'toLower':
        value = value.toLowerCase();
        return value;
      default:
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
}
