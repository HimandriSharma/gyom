import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) { }
  getMemesData(){
    let url = 'https://api.imgflip.com/get_memes';
    return this.http.get(url);
  }
}
