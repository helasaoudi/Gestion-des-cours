import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CourServiceService } from '../courService/cour-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-add-cour',
  templateUrl: './add-cour.component.html',
  styleUrls: ['./add-cour.component.css'],
})
export class AddCourComponent {

  
  addForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
  });
  

  constructor(private coursService: CourServiceService, private notification: NzNotificationService) {}

  onSubmit() {
    if (this.addForm.valid) {
      const coursData = this.addForm.value;
      this.coursService.addCours(coursData).subscribe(
        (response) => {
          console.log('Cours ajouté avec succès:', response);
          // Utilisez NzNotificationService pour afficher la notification de succès
          this.notification.success('Succès', 'Cours ajouté avec succès');
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du cours:', error);
        }
      );
    }
  }
}
