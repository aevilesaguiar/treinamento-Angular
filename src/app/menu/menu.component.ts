import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/disshes'

import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  leader: Leader;


  constructor(private leaderService: LeaderService,) { }

  ngOnInit(): void {
  }
  onSelect(dish:Dish, leader:Leader){

    this.selectedDish=dish;

    this.leader=leader;
  }

}
