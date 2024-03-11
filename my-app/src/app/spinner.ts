import {ISpinner} from './app.component'
export function spinner(msg:string) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const oldFunction = descriptor.value;
      descriptor.value = async function(...args:[]){
        const spinner:ISpinner = this as ISpinner;
        try{
          //spinner.on();
          return await oldFunction.apply(this,args)
        }
        catch(err){
          spinner.error(msg)
        }
        finally{
          //spinner.off();
        }
      }
  };
}