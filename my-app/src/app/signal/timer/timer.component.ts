import { Component, Signal, effect, signal } from '@angular/core';

function getTime(date:Date) {
  const options:Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  time = signal(getTime(new Date()))
  constructor(){
    effect((onCleanUp)=>{
      const handlerTimer = setInterval(()=>{
        this.time.set(getTime(new Date()))
      },1000)
    
      onCleanUp(() => {
        clearInterval(handlerTimer);
      });

    })
  }
}
