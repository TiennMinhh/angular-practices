import { CommonModule } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = input.required<Product[]>(); // Use input.required to ensure products are provided

  filterName = signal('');

  filteredProducts = computed(() => {
    const filter = this.filterName().toLowerCase();
    return this.products().filter(product => product.name.toLowerCase().includes(filter));
  });

  filterProducts(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.filterName.set(value);
  }
}
