import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  @ViewChild('tw') typewriterElement;
  darkMode: boolean = false;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  greetings: string[] = ['Hello', 'Hey', 'Chào', 'Hola', 'Bonjour', '안녕']
  greeting:string = '';
  
  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode$.subscribe(data => this.darkMode = data);
    this.greeting = this.greetings[Math.floor(Math.random() * this.greetings.length)];
  }

  ngAfterViewInit() {
    // use different targets depending on whether it is dark mode or light mode
    const targetLight = this.typewriterElement.nativeElement;
    const targetDark = document.getElementById('twdark');

    const writerLight = new Typewriter(targetLight, {
      loop: true,
      cursorColor: '#D2E6D6',
      typeColor: '#e1e1e5',
      deleteSpeed: 30,
      typeSpeed: 100,
      blinkSpeed: 230,
      animateCursor: true,
    })

    writerLight
    .strings(
      1500,
      "I am currently studying mathematics ٩(＾◡＾)۶",
      "I am a full stack developper and an AI enthusiast!",
      "I am passionate about language learning. Teach me yours!",
      "cheetoh.",
      "Vintage computers fascinate me :-)",
      "I find joy in helping others learn math and science",
      "I am a proud gymrat",
      "Send me an email or even a DM, and I'd love to chat :-D"
    ).start()

    const writerDark = new Typewriter(targetDark, {
      loop: true,
      typeColor: '#313638',
      deleteSpeed: 30,
      typeSpeed: 100,
      blinkSpeed: 230,
      animateCursor: true,
    })

    writerDark
    .strings(
      1500,
      "I am currently studying mathematics ٩(＾◡＾)۶",
      "I am a full stack developper and an AI enthusiast!",
      "I am passionate about language learning. Teach me yours!",
      "cheetoh.",
      "Vintage computers fascinate me :-)",
      "I find joy in helping others learn math and science",
      "I am a proud gymrat",
      "Send me an email or even a DM, and I'd love to chat :-D"

    ).start()
  }

  public setDarkMode(darkModeOn: boolean):void {
    this.darkMode = darkModeOn;
  }
}
