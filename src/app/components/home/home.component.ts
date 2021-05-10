import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data:any
  //baseUrl = "http://localhost:3000/join"
  baseUrl = "https://tourmaline-cream-forgery.glitch.me/join"
  isSubmitted = false
  isError = false
  isLoading = false
  async onJoin(data:any){
    this.isLoading = true
    await this.http.post(this.baseUrl, data).toPromise().then((data)=>{
      if(Object(data).status == true){
        this.isSubmitted = true;
      }
      else{
        this.isError = true
      }
    }).catch((err)=>{
      this.isError = true
    })
    this.isLoading = false
  }

  toggler(){
    this.isSubmitted  = false
    this.isError = false
  }

  ngOnInit(): void {
  }

}
