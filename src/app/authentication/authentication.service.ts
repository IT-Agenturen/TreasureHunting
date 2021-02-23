import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";  
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = environment.APIUrl;
  /*
  public message: string = "Uninitialized";
  public response;*/


  constructor(private httpClient: HttpClient) { }
  
   fetchData(controller){
    const promise = this.httpClient.get(this.apiUrl + controller).toPromise();
    console.log(promise);  
    promise.then((data)=>{
      console.log("Promise resolved with: " + JSON.stringify(data));
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  GetCharacters(){
    return this.httpClient.get(this.apiUrl + "character");
  }
}

