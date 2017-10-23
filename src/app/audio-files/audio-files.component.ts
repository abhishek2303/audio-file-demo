import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
// import { AudioFileService } from "../../shared/_services/audio-file.service";
// import { NotificationService } from '../../shared/utils/notification.service';
// import { ConfigService } from '../../shared/utils/config.service';
import { Router } from "@angular/router";
import { Http,Response,Headers,RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs";
declare var $:any;
declare var recorderObject: any;
declare function startRecording(button) : void;
declare function stopRecording(button) : void;


@Component({
  selector: 'app-audio-files',
  templateUrl: './audio-files.component.html',
  styleUrls: ['./audio-files.component.css']
})
export class AudioFilesComponent implements OnInit {
  breadcrum: string;
  dashboardIcon: string;
  audioIcon: string;
  isOn:boolean;
  isOff:boolean;
 

  constructor(
  		      private appComponent: AppComponent,
          ) { }

  ngOnInit() {
  	
  	this.isOn = false;
  	this.isOff = true;
  	recorderObject.recorder();
  }
  
  public start(button){
    if(this.isOff) {
      startRecording(button);
      this.isOn = true;
      this.isOff = false;
    }
  	
  };
  
  public stop(button){
    if(this.isOn) {
      let b = stopRecording(button);
      this.isOn = false;
      this.isOff = true;
      console.log(b);
    }
  	
  }
  /*startRecording(button) {
    recorder && recorder.record();
    this.isOn = true;
    this.isOff = false;

    console.log('Recording.....');
  }*/

}