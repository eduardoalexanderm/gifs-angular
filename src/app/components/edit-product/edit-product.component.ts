import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editForm: FormGroup;
  productId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      title: ['', [Validators.required],  ],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') ?? '';
    this.productService.getProductById(this.productId).subscribe(product => {
      this.editForm.setValue({
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image
      });
    });
  }

  onSubmit(): void {
    if(this.editForm.invalid) {
      alert('Formulario inválido, por favor llene todos los campos');
      return;
    }
      
    
   
    this.productService.updateProduct(this.productId, this.editForm.value).subscribe(() => {
      this.router.navigate(['/products']);
      alert('Producto actualizado');
    });
  }
}
