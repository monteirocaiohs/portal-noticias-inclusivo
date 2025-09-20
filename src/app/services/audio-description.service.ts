import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AudioDescriptionService {
  speak(text: string) {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não suporta áudio descrição.');
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1;   // velocidade normal
    utterance.pitch = 1;  // tom normal
    window.speechSynthesis.speak(utterance);
  }
}
