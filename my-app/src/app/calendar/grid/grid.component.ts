import { Component, HostListener } from '@angular/core';
import { DayComponent } from '../day/day.component';
import { getDays } from '../../getdays';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [DayComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
    days=[...getDays()]
    @HostListener('click', ['$event'])
    handlerClick(ev:Event){
      ev.stopPropagation();  
      //console.log((ev.target as HTMLElement).dataset["day"])
      const node = (ev.composedPath()).map(n=> n as HTMLElement)
        .find(n => n.dataset && 'day' in n.dataset)
     
      if(node){
        const {day} = node.dataset;
        console.log('dia:' + day)
      }

    }

}
