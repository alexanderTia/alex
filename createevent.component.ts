import { Component } from '@angular/core';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent {
  eventData: any = {
    titre: '',
    description: '',
    date: '',
    heure: '',
    lieu: '',
    infosTicket: ''
  };

  onCreateEvent() {
    // Implémentez ici la logique de création de l'événement avec les données de eventData
    console.log('Nouvel événement créé :', this.eventData);
  }
}
