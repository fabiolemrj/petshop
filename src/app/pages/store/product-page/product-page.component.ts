import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {
  public products$: Observable <Product[]> = null;

  constructor(private data: DataService) { }


  ngOnInit() {
    this.products$ = this.data.getProducts();
  }

}
