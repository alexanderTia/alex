import { Component } from '@angular/core';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent {
  eventData: any = {
    titre: 'Conférence sur Angular',
    description: 'Une conférence sur le développement avec Angular',
    date: '2023-08-15',
    heure: '14:00',
    lieu: 'Salle de conférence A',
    infosTicket: 'Places limitées, réservez dès maintenant!'
  };
}
