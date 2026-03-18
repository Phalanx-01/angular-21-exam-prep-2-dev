import { Component, DestroyRef, inject, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, Subject, filter } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  private readonly searchSubject = new Subject<string>();

  searchChanged = output<string>();

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((term) => term.length > 1),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((term) => {
        this.searchChanged.emit(term);
      });
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }
}
