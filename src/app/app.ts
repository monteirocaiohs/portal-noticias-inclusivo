import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccessibilityService } from './services/accessibility.service';
import { AudioDescriptionService } from './services/audio-description.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portal-inclusivo';

  constructor(
    public accessibility: AccessibilityService,
    public audio: AudioDescriptionService
  ) {}

}
