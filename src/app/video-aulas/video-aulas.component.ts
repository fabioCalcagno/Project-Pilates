import { OnInit, ViewChild } from '@angular/core';
import { Component, Renderer2, ElementRef } from '@angular/core';
/* import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; */
import { VideoServiceService } from '../Services/Video/video-service.service';



@Component({
  selector: 'app-video-aulas',
  templateUrl: './video-aulas.component.html',
  styleUrls: ['./video-aulas.component.css']
})
export class VideoAulasComponent implements OnInit {

  constructor(private videoService: VideoServiceService,
    private renderer: Renderer2,
    private el: ElementRef) {

  }
  videoUrl =  '../../../os-beneficios-do-pilates.mp4'           /* 'https://www.youtube.com/embebed/v=PM19B4cgOWE' */
  iframe_html;
  divCreator;

     

  @ViewChild('topDiv', { read: ElementRef, static: true }) private topDiv: ElementRef<HTMLDivElement>;

  ngOnInit() {
   

  /*   this.iframe_html = this.videoService.showVideo(this.videoUrl); */

    
     console.log(this.iframe_html)
    const div = this.renderer.createElement('div');
    this.renderer.addClass(div, 'video-div');
    
    this.renderer.appendChild(this.el.nativeElement, div);
    this.renderer.appendChild(this.topDiv.nativeElement, div);

   const iframe =  this.renderer.createElement('iframe', this.iframe_html );
   this.renderer.setAttribute(iframe, 'src', this.videoUrl)



  

    this.topDiv.nativeElement.appendChild(iframe)




    
        
        console.log(this.iframe_html) 
    
    
        /*   this.divCreator = document.createElement("div");
        this.divCreator.setAttribute("class", "video-div");
        

 */


  }
}