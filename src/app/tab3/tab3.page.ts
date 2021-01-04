import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    slides = [
    {
      img: 'https://cdn.discordapp.com/attachments/771171346625462284/787475677762682940/5e59a34c230000590d39c782.jpg',
      titulo: 'Carla',
      edad: '21 años',
      carrera: 'Civil Informatica'
    },
    {
      img: 'https://cdn.discordapp.com/attachments/771171346625462284/787472401855676426/persona-e1533759204552.jpg',
      titulo: 'Astolfo',
      edad: '23 años',
      carrera: 'Plan Comun'
    }
  ];

  constructor() {}

}
