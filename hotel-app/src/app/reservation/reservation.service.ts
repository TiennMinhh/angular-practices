import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  private baseUrl: string = 'http://localhost:3001/'

  constructor(private http: HttpClient){
  }

  // CRUD

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.baseUrl + "reservations");
  }

  getReservation(id: string): Observable<Reservation | undefined> {
    return this.http.get<Reservation | undefined>(this.baseUrl + "reservation/" + id);
  }

  addReservation(reservation: Reservation): Observable<void> {
    reservation.id = Date.now().toString();
    return this.http.post<void>(this.baseUrl + "reservation", reservation);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + "reservation/" + id);
  }

  updateReservation(id: string, updatedReservation: Reservation): Observable<void> {
    return this.http.put<void>(this.baseUrl + "reservation/" + id, updatedReservation);
  }
  
}
