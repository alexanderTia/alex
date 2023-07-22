import { Component } from '@angular/core';

@Component({
  selector: 'app-eventmanager',
  templateUrl: './eventmanager.component.html',
  styleUrls: ['./eventmanager.component.css']
})
export class EventmanagerComponent {
  eventData: any = {
    titre: '',
    description: '',
    date: '',
    heure: '',
    lieu: ''
  };

  onUpdateEvent() {
    // Vous pouvez implémenter ici la logique de mise à jour de l'événement
    console.log('Événement mis à jour :', this.eventData);
  }

  onDeleteEvent() {
    // Vous pouvez implémenter ici la logique de suppression de l'événement
    console.log('Événement supprimé :', this.eventData);
  }
}
