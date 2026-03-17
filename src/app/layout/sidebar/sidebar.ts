import { Component, signal, computed } from '@angular/core';
import { RouterLink } from "@angular/router";

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  protected readonly navItems = signal<NavItem[]>([
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Users', path: '/users', icon: '👥' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
    { label: 'Reports', path: '/reports', icon: '📈' },
  ]);

  protected readonly itemCount = computed(() => this.navItems().length);
}
