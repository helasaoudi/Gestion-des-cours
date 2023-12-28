import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourServiceService {
  private apiUrl = 'http://localhost:8080/api/v1/cours';

  constructor(private http: HttpClient) { }
  getCours(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  addCours(coursData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, coursData);
  }
  updateCours(coursData: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update`, coursData);
  }
  deleteCours(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
  getCoursById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  private api = 'http://localhost:8080/api/v1/contact/add'; // Update the URL with your backend URL


  sendContact(contactData: any): Observable<any> {
    return this.http.post(this.api, contactData);
  }

}
