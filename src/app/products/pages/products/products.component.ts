import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-products-page',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy  {

  public isProductVisible: boolean = false;
  public currentPrice: number = 0;
  
  constructor() { }
  ngOnDestroy(): void {
   console.log('ngOnDestroy');
  }
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit');
  }
  ngDoCheck(): void {
   console.log('ngDoCheck');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  increasePrice() {
    this.currentPrice++;
  }

}
