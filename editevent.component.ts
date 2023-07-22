import { Component } from '@angular/core';

@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent {
  eventData: any = {
    titre: 'Conférence sur Angular',
    description: 'Une conférence sur le développement avec Angular',
    date: '2023-08-15',
    heure: '14:00',
    lieu: 'Salle de conférence A',
    infosTicket: 'Places limitées, réservez dès maintenant!'
  };

  onEditEvent() {
    // Implémentez ici la logique de mise à jour de l'événement avec les données de eventData
    console.log('Événement modifié :', this.eventData);
  }
}
