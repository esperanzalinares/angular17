import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateService } from './create.service';
import { spinner } from './spinner';
import { GridComponent } from './calendar/grid/grid.component';
import { DayComponent } from './calendar/day/day.component';
import { CounterComponent } from './signal/counter/counter.component';
import { TimerComponent } from './signal/timer/timer.component';
interface Response{
  id:number,
  name:string
}
export interface ISpinner{
  error:(message:string)=>void
  
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GridComponent,CounterComponent,TimerComponent],
  providers:[CreateService<Response>],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements ISpinner {
  title = 'my-app';

  message= ''
  constructor(private service:CreateService<Response>){
    //this.create({id:1,name:'pedro'});
  }
  on(): void {
    console.log("on")
  }
  off(): void {
    console.log("off")
  }
  error(message: string){
    this.message=message;
  };

  @spinner("El cliente no existe")
    async create(request:any){
    const response = await this.service.add(request)
  }

  
  /*
  async create(){
    try{
      const response = await this.service.add({id:1,name:'esperanza'})
    }
    catch(err){
      console.log(err)
    }
  }
  */
}
