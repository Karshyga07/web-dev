import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { 
  title = 'online-store';
}