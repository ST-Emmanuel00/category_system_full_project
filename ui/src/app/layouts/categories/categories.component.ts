import { Component } from '@angular/core';
import { ListCategoryComponent } from "../../components/list-category/list-category.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ListCategoryComponent, FooterComponent],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {

}
