import { Component, signal, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footbar } from './components/footbar/footbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('angular-handbook');

  protected readonly innerWidth = signal(window.innerWidth);

  ngOnInit(): void {
    this.innerWidth.set(window.innerWidth);
  }

  @HostListener('window:resize')
  protected onResize() {
    this.innerWidth.set(window.innerWidth);
  }
}