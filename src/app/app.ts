import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AccessibilityService} from './services/accessibility.service';
import {AudioDescriptionService} from './services/audio-description.service';

import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faAccessibleIcon} from '@fortawesome/free-brands-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FaIconComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portal-inclusivo';
  faPlay = faPlay;
  faAccessibleIcon = faAccessibleIcon;

  constructor(
    public accessibility: AccessibilityService,
    public audio: AudioDescriptionService
  ) {
  }

}
