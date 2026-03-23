import { Component, input, computed } from '@angular/core';

export interface StatCard {
  title: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
}

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.scss',
})
export class StatCardComponent {
  card = input.required<StatCard>();
  highlighted = input(false);

  trendLabel = computed(() => {
    const labels = {
      up: '⬆️ Steigend',
      down: '⬇️ Fallend',
      stable: '➡️ Stabil',
    };
    return labels[this.card().trend];
  });
}
