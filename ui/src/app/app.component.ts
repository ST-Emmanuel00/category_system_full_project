import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { CategoriesComponent } from "./layouts/categories/categories.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, CategoriesComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ui';
}
