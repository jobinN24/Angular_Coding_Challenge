import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './injectable1.component'

@Component({
  selector: 'app-root',
  templateUrl: './uiPage.component.html',
 
})
export class AppComponent {
  private lastName = " ";
  private debounce = true;

  constructor(private service:ConfigService,private http: HttpClient){

  }
 
  getLastName(e){
    let that = this;
    if(this.debounce){
      this.debounce = false;
      setTimeout(()=>{
        this.debounce = true;
      }, 500);

      this.service.getLastName().subscribe(function(response){
        that.lastName = response.lastName; //assuming that response is an object with lastName as a property
      },
      function(error){
        console.log(error);
      });
    }
  }


}
