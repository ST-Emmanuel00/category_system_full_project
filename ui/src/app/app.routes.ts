import { Routes } from '@angular/router';
import { CategoriesComponent } from "./layouts/categories/categories.component"
export const routes: Routes = [

    {
        path: "",
        redirectTo: "/categories",
        pathMatch: "full"
    },
    {
        path: "categories",
        component: CategoriesComponent
    },
];
