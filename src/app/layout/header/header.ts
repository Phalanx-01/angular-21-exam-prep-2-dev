import { Component, signal } from '@angular/core';
import { sign } from 'node:crypto';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly title = signal('Dashboard');
  protected readonly userName = signal('Luke Skywalker');
  protected readonly sidebarOpen = signal(true);

  toggleSidebar() {
    this.sidebarOpen.update((open) => !open);
  }
}
