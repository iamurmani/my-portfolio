import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageBodyComponent } from "./components/page-body/page-body.component";

const routes:Routes =[
    {path:'',component:PageBodyComponent}
]
@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class PortfolioRoutingModule {
}