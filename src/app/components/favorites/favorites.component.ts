import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteProducts: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.favoriteProducts = this.productService.getFavoriteProducts();
  }

  removeFavorite(product: any): void {
    this.productService.updateFavoriteStatus(product);
    this.favoriteProducts = this.favoriteProducts.filter(p => p.id !== product.id);
  }
}