import { Component, computed, effect, signal } from '@angular/core';
import { AddCardForm } from "./components/add-card-form/add-card-form";

interface StatCard {
  title: string;
  value: number;
  trend: 'up' | 'down' | 'stable';
}

@Component({
  selector: 'app-dashboard',
  imports: [AddCardForm],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  constructor() {
    effect(() => {
      console.log('Stats updated:', this.cards);
    });
  }

  protected readonly cards = signal<StatCard[]>([
    { title: 'Users', value: 1250, trend: 'up' },
    { title: 'Revenue', value: 45000, trend: 'up' },
    { title: 'Orders', value: 320, trend: 'down' },
    { title: 'Tickets', value: 15, trend: 'stable' },
  ]);

  protected readonly upTrends = computed(() => this.cards().filter((card) => card.trend === 'up'));

  addCard(card: StatCard) {
    this.cards.update(current => [...current, card]);
  }

}
