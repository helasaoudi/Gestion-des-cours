import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourServiceService } from '../courService/cour-service.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-edit-cour',
  templateUrl: './edit-cour.component.html',
  styleUrls: ['./edit-cour.component.css']  // Correction de la propriété styleUrls
})
export class EditCourComponent {
  editForm: FormGroup; // Ajout de la déclaration de la variable

  constructor(private route: ActivatedRoute, private router:Router, private courService: CourServiceService,private notification: NzNotificationService) {
    // Initialisez le formulaire avec les champs nécessaires et les validateurs
    this.editForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    // Utilisez le service ActivatedRoute pour récupérer l'ID du cours depuis l'URL
    this.route.params.subscribe((params) => {
      const courseId = +params['id']; // Convertissez l'ID en nombre

      // Appel à un service pour obtenir les anciennes valeurs à partir de l'API (ajoutez cette logique dans votre service)
      this.courService.getCoursById(courseId).subscribe(
        (cours) => {
          // Mettez à jour les valeurs du formulaire avec les anciennes valeurs
          this.editForm.patchValue({
            title: cours.title,
            price: cours.price,
            imageUrl: cours.imageUrl,
          });
        },
        (error) => {
          console.error('Erreur lors du chargement des anciennes valeurs:', error);
        }
      );
    });
  }

  onSubmit() {
    // Vérifiez si le formulaire est valide avant de procéder
    if (this.editForm.valid) {
      // Récupérez les données éditées du formulaire
      const editedData = this.editForm.value;
  
      // Récupérez également l'ID du cours à partir de la route
      const courseId = +this.route.snapshot.params['id'];
  
      // Ajoutez la logique pour soumettre les données modifiées à l'API (via un service)
      this.courService.updateCours({ id: courseId, ...editedData }).subscribe(
        (response) => {
          console.log('Cours mis à jour avec succès:', response);
          this.notification.success('Succès', 'Cours mis à jour avec succès');
          this.router.navigate(['/Admin']);

        },
        (error) => {
          console.error('Erreur lors de la mise à jour du cours:', error);
          console.error('Erreur lors de la mise à jour du cours', error);
        }
      );
    } else {
      console.log('Le formulaire n\'est pas valide. Veuillez corriger les erreurs.');
      // Ajoutez ici le code pour gérer le cas où le formulaire n'est pas valide, par exemple, afficher un message d'erreur
    }
  }
  
}
