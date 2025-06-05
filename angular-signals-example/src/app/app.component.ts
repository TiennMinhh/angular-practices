import { CommonModule } from '@angular/common';
import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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

  products = signal([
    { id: 1, name: 'Milk', price: 10.33 },
    { id: 2, name: 'Bread', price: 4.65 },
    { id: 3, name: 'Cream', price: 6.7 }
  ]);

  filterName = signal('');

  filteredProducts = computed(() => {
    const filter = this.filterName().toLowerCase();
    return this.products().filter(product => product.name.toLowerCase().includes(filter));
  });
  
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

  filterProducts(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filterName.set(value);
  }

}
