import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { WorkInterface } from "./work";
import { ProjectInterface } from "./project";

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  private workUrl: string = "assets/api/work.json"
  private projectsUrl: string = "assets/api/projects.json"

  constructor(private http: HttpClient) {}

    getWork(): Observable<WorkInterface[]> {
        return this.http.get<WorkInterface[]>(this.workUrl).pipe(
          
        )
    }

    getProjects(): Observable<ProjectInterface[]> {
      return this.http.get<ProjectInterface[]>(this.projectsUrl).pipe(
        
      )
   }

    handleError(err: HttpErrorResponse) {
        return throwError("Error in getWork()");
    }
}
