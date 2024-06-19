import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
 
  @Input() 
  public price: number = 0;
  public interval$?: Subscription;
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente hijo',changes)
  }
  ngOnDestroy(): void {
    console.log('COmponente hijo: onDestroy')
    this.interval$?.unsubscribe();
  }
  ngOnInit(): void {
    console.log('COmponente hijo: ngOnInit')

   this.interval$ =  interval(1000).subscribe(value => console.log(value))
  }




}
