import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/product';
  private favoritesKey = 'favoriteProducts';

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateFavoriteStatus(product: any): void {
    let favorites = this.getFavoriteProducts();
    const index = favorites.findIndex(p => p.id === product.id);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(product);
    }

    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  getFavoriteProducts(): any[] {
    const favorites = localStorage.getItem(this.favoritesKey) ?? '[]';
    return JSON.parse(favorites);
  }
}