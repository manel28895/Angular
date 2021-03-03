import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "src/app/models/User";
import { Role } from "src/app/models/Role";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
    
    
    /**
     * Save a new User object in the Backend server data base.
     * @param user
     */
     saveUser(user: User): Observable<User>{
         return this.http.post<User>('/api/auth/signupUser', user);
     }

         /**
     * Save a new User object in the Backend server data base.
     * @param user
     */
     saveCompany(user: User): Observable<User>{
         return this.http.post<User>('/api/auth/signupCompany', user);
     }


    /**
     * Save a new User object in the Backend server data base.
     * @param user
     */
     login(user: User): Observable<User>{
         return this.http.post<User>('/api/auth/signin', user);
     }

     /**
     * Save a new User object in the Backend server data base.
     * @param user
     */
     logout():Observable<string>{
         return this.http.get<string>('/api/auth/logout');
     }

          /**
      * Update an existing User object in the Backend server data base.
      * @param user
      */
      updateUser(user: User): Observable<User>{
          return this.http.put<User>('/api/auth/update', user);
      }


       /**
     * Get all book's categories as reference data from Backend server.
     */
     loadRole(): Observable<Role>{
         let headers = new HttpHeaders();
         headers.append('content-type', 'application/json');
         headers.append('accept', 'application/json');
         return this.http.get<Role>('/api/test/getRoleByName', {headers: headers});
     }
     
     
     
}
