import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skelton',
  host: {
    class: 'pulse',
  },
  imports: [CommonModule],
  template: '',
 styles: [`
  :host {
    display: block;
    width: var(--skeleton-rect-width);
    height: var(--skeleton-rect-height);
    background: rgb(239, 241, 246) no-repeat;
    border-radius:10px;
    animation: pulse 1.5s infinite ease-in-out;
  }

  @keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}

`],
})
export class SkeltonComponent {
  width= '';
  height='';
  className = '';

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
  }
}
