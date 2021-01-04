import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  public likes = 0;
  public boolLike = false;

  constructor() {}
  
  


  onToggleColorTheme(event) {

    if (!this.boolLike) {
      this.likes+=1;
      this.boolLike = true;
    } else {
      this.likes-=1;
      this.boolLike = false;
    }



    console.log(event.detail.checked);
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    } else{
      document.body.setAttribute('color-theme','pink')
    }
    
  }

}
