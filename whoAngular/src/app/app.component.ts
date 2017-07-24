import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    jsondata=[];

    constructor(http: Http){
        //https://api.myjson.com/bins/13kbnn
        http.get('https://api.myjson.com/bins/10ldcj')
        .map( data => data.json() ) 
        .subscribe(data => {this.jsondata = data.data.flights; console.log('my data length',data.data.flights)});
    }

    

}
