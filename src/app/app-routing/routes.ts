/*esse arquivo foi criado para criar as rotas necessárias */
import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactComponent } from '../contact/contact.component';
import { Component } from '@angular/core';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';


//uma constatnte para definir as rotas

export const routes: Routes = [
  { path:'home', component: HomeComponent}, /*quando eu navegar para o path home o componente correspondente é o HomeComponent */
  { path:'menu', component: MenuComponent},
  { path: 'dishdetail/:id',     component: DishdetailComponent },
  /*rota padrão p usuario será direcionado para HomeComponent*/
  { path:'contactus',component:ContactComponent},
  { path:'', redirectTo:'/home', pathMatch:'full'}/*quando vc navegar sem especificar uma url , então vc vai para a home */


]
