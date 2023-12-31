import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  darkMode: boolean = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe(data => this.darkMode = data);
  }
showBubble: boolean = false;

  copyToClipboard(): void {
    const discordHandle = '_waterfountain'; // Replace with your actual Discord handle
    navigator.clipboard.writeText(discordHandle).then(() => {
      this.showBubble = true;
      setTimeout(() => this.showBubble = false, 2000); // Hide the bubble after 2 seconds
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }

}

