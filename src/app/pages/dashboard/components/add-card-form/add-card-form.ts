import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-card-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-card-form.html',
  styleUrl: './add-card-form.scss',
})
export class AddCardForm {
  private fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    title: ['', Validators.required],
    value: [0, [Validators.required, Validators.min(0)]],
    trend: ['stable' as 'up' | 'down' | 'stable'],
  });

  cardAdded = output<{ title: string; value: number; trend: 'up' | 'down' | 'stable' }>();

  onSubmit() {
    if (this.form.valid) {
      this.cardAdded.emit(this.form.getRawValue());
      this.form.reset({ title: '', value: 0, trend: 'stable' });
    }
  }
}
