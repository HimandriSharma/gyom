import { Component, OnInit } from '@angular/core';
import { MemeService } from '../meme.service';

export interface MemeDataType {
  id: String;
  name: String;
  url: String;
  width: number;
  height: number;
  box_count: number;
  captions: number;
}
export interface ResponseType {
  success: boolean;
  data: {
    memes: [];
  };
}
export interface renderMemeType{
  topText: String,
  bottomText: String,
  randomImage: String
}
@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.css'],
})
export class MemeComponent implements OnInit {
  memesData: MemeDataType[] = [];
  meme: renderMemeType = {
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  };
  getMemeImage() {
    const memesArray = this.memesData;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    this.meme = {
      ...this.meme,
      randomImage: url
    };
  }
  constructor(private memes: MemeService) {
    this.memes.getMemesData().subscribe((response) => {
      this.memesData = (response as ResponseType).data.memes;
    });
  }

  ngOnInit(): void {}
}
