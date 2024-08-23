import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    console.log(id);
    this.productService.getProductById(id).subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
    });
  }

  toggleFavorite(): void {
    this.product.isFavorite = !this.product.isFavorite;
    this.productService.updateFavoriteStatus(this.product);
  }
}
