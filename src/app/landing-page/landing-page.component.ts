import { Component } from '@angular/core';
import { CourServiceService } from '../courService/cour-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  coursList: any[] = [];
  cardHeight = 300; 

  constructor(private contactService: CourServiceService) {}

  ngOnInit(): void {
    this.contactService.getCours().subscribe((data: any) => {
      this.coursList = data;
      console.log(data);
    });
  }

  send(): void {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.contactService.sendContact(contactData).subscribe(
        (response) => {
          console.log('Contact sent successfully', response);
          // Optionally, you can reset the form or show a success message
        },
        (error) => {
          console.error('Error sending contact', error);
          // Handle the error (e.g., show an error message)
        }
      );
    }
  }
}
  



