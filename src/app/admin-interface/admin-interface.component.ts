import { Component } from '@angular/core';
import { CourServiceService } from '../courService/cour-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrl: './admin-interface.component.css'
})
export class AdminInterfaceComponent {
  coursList: any[] = [];
  constructor(private coursService: CourServiceService ,private router:Router,private courService:CourServiceService,private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.coursService.getCours().subscribe((data: any) => {
      this.coursList = data;
      console.log(data);
    });
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/edit', id]);
  }
  onDelete(courseId: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courService.deleteCours(courseId).subscribe(
        (response) => {
          console.log('Cours supprimé avec succès:', response);
            this.ngOnInit()        },
        (error) => {
          console.error('Erreur lors de la suppression du cours:', error);
          // Ajoutez ici la logique pour informer l'utilisateur qu'il y a eu une erreur
        }
      );
    }
  }
  

}
