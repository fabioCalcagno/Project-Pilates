import { OnInit, ViewChild } from '@angular/core';
import { Component, Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'; 
import { VideoServiceService } from '../Services/Video/video-service.service';




@Component({
  selector: 'app-video-aulas',
  templateUrl: './video-aulas.component.html',
  styleUrls: ['./video-aulas.component.css']
})
export class VideoAulasComponent implements OnInit {

  constructor(private videoService: VideoServiceService,
    private renderer: Renderer2,
    private el: ElementRef,
    private domSanitizer:DomSanitizer
                                     ) {

  }

  

   getEmbedUrl(codVideo){
    return this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + codVideo + '?ecver=2')
  }

  videos = ['XP5TBzQkBvQ','cn-xwKY61Qw','f_dvr2mJvgM','9V9GSqld1_M',
            'cn-xwKY61Qw',
          '6wD4V0rvlDI']

  videoUrl =   'https://www.youtube.com/watch?v=XP5TBzQkBvQ' 
  iframe_html;

     

  @ViewChild('topDiv', { read: ElementRef, static: true }) private topDiv: ElementRef<HTMLDivElement>;
  @ViewChild('videoDiv', { read: ElementRef, static: true }) private videoDiv: ElementRef<HTMLDivElement>;


  

  ngOnInit() { 
    
  }

 
  
 

}