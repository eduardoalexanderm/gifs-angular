import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = data;
      console.log(this.filteredProducts);
    });
  }

  toggleFavorite(product: any): void {
    product.isFavorite = !product.isFavorite;
    this.productService.updateFavoriteStatus(product);
  }

  // TODO: Métodos para ordenar, buscar, y filtrar productos se agregarán aquí
}