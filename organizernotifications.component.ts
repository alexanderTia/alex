import { Component } from '@angular/core';

@Component({
  selector: 'app-organizernotifications',
  templateUrl: './organizernotifications.component.html',
  styleUrls: ['./organizernotifications.component.css']
})
export class OrganizernotificationsComponent {
  totalParticipants: number = 345;
  organizerEvents: any[] = [
    {
      id: 1,
      titre: 'Conférence sur Angular',
      date: '2023-08-15',
      participants: 120
    },
    {
      id: 2,
      titre: 'Séminaire de développement web',
      date: '2023-09-05',
      participants: 200
    },
    {
      id: 3,
      titre: 'Atelier de design UX',
      date: '2023-09-20',
      participants: 25
    }
  ];

  onEditEvent(eventId: number) {
    // Implémentez ici la logique de modification de l'événement avec l'ID eventId
    console.log('Événement à modifier :', eventId);
  }

  onDeleteEvent(eventId: number) {
    // Implémentez ici la logique de suppression de l'événement avec l'ID eventId
    console.log('Événement à supprimer :', eventId);
  }

}
