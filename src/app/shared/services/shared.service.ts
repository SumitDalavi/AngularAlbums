import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
import { Albums } from '../models/albums';
import { Photos } from '../models/photos';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url = "https://jsonplaceholder.typicode.com";
  constructor(
    private http: HttpClient,
  ) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.url + "/users")
  }

  /** GET user by id. Will 404 if id not found */
  getUser(id: number): Observable<Users> {
    const url = `${this.url}/users/${id}`;
    return this.http.get<Users>(url);
  }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>(this.url + "/albums")
  }

  /** GET albums by id. Will 404 if id not found */
  getAlbum(id: number): Observable<Albums> {
    const url = `${this.url}/albums/${id}`;
    return this.http.get<Albums>(url);
  }

  getPhotos(): Observable<Photos[]> {
    return this.http.get<Photos[]>(this.url + "/photos")
  }

  /** GET photos by id. Will 404 if id not found */
  getPhoto(id: number): Observable<Photos> {
    const url = `${this.url}/photos/${id}`;
    return this.http.get<Photos>(url);
  }
}
