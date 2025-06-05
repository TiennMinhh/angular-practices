import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';

  theme = signal('light');
  label = this.theme();

  price = 19;
  quantity = signal(20);
  totalPrice = computed(() => this.price * this.quantity());

  
  constructor() {
    effect(() => {
      this.label = this.theme();
    })
  }

  toggleTheme() {
    //this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
    this.theme.update(currentValue => currentValue === 'light' ? 'dark' : 'light');
  }

  changeQuantity(event: Event) {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    this.quantity.set(value);
  }

}
