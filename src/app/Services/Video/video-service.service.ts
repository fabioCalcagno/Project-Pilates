import { Injectable } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Injectable({
  providedIn: 'root'
  
})


export class VideoServiceService {

  constructor(
    private embedService: EmbedVideoService) {}
 
 
    showVideo(videoUrl:any ){
      return  this.embedService.embed(videoUrl);
     
    
  }
  }

