import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincommonComponent } from './admincommon/admincommon.component';
import {  Routes,RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'; 
import { CateComponent } from './cat/cate.component';
import { SubcateComponent } from './subcat/subcate.component';
import { SubsubcateComponent } from './subsubcat/subsubcate.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatSliderModule} from '@angular/material/slider';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { GaurdService } from './gaurd/gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { DailyordersComponent } from './dailyorders/dailyorders.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProducctsComponent } from './products/produccts.component';
import { BrandComponent } from './brand/brand.component';
import {AgGridModule} from 'ag-grid-angular';
import { PracticeDirective } from './practice.directive';
const route:Routes=[
  {path:"",component:AdmincommonComponent,children:[
    {path:"",component:LoginComponent},
    {path:"cat",component:CateComponent,canActivate:[GaurdService],data:{mycomp:"cat"}},
    {path:"login",component:LoginComponent},
    {path:"admin/dailyorders",component:DailyordersComponent,data:{role:"admin",mycomp:"dailyorders"},canActivate:[GaurdService]},
    {path:"logout",component:LogoutComponent},
    {path:"welcome",component:WelcomeComponent,canActivate:[GaurdService]},
    {path:"subcat",component:SubcateComponent,canActivate:[GaurdService],data:{mycomp:"subcat"}},
    {path:"brand",component:BrandComponent,canActivate:[GaurdService],data:{mycomp:"brand"}},
    {path:"product",component:ProducctsComponent,canActivate:[GaurdService],data:{mycomp:"product"}}, 
    {path:"subsubcat",component:SubsubcateComponent,canActivate:[GaurdService],data:{mycomp:"subsubcat"}}, 
  ]},   
       
]  

@NgModule({
  declarations: [AdmincommonComponent,
                 CateComponent,
                 SubcateComponent,
                 SubsubcateComponent,
                  LoginComponent,
                   LogoutComponent,
                    DailyordersComponent,
                   WelcomeComponent,
                   ProducctsComponent,
                   BrandComponent,
                   PracticeDirective],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule, 
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    AgGridModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule.forChild(route)
  ]
})
export class AdminModule { }
