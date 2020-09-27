import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import "./admin/admin.module"
import "./user/user.module"
  const routes:Routes=[  
    {path:"",redirectTo:"user",pathMatch:"full"},
    {path:"admin",loadChildren:"./admin/admin.module#AdminModule"},
    {path:"user",loadChildren:"./user/user.module#UserModule"}
 
    
  ]
  // {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }  
 



