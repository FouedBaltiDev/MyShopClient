import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const bar = this.elementRef.nativeElement.querySelector('#bar');
    const close = this.elementRef.nativeElement.querySelector('#close');
    const nav = this.elementRef.nativeElement.querySelector('#navbar');

    if (bar && nav) { // Vérification pour s'assurer que nav n'est pas nul
      bar.addEventListener('click', () => {
        nav.classList.add('active');
      });
    }

    if (close && nav) { // Vérification pour s'assurer que nav n'est pas nul
      close.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    }
  }

}
