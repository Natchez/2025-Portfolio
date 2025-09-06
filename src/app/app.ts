import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './header/header';
import {Experience} from './experience/experience';
import {Projects} from './projects/projects';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [Header, Projects, Experience, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('afc2025portfolio');

  spinner = faSpinner;
  protected readonly faSpinner = faSpinner;
}
