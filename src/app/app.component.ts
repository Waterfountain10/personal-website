import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  darkMode: boolean = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  title="personal-website"

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe(data => this.darkMode = data);
  }
}
