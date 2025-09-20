import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AccessibilityService {
  toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
  }
}
