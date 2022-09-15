import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders():Leader[]{
    return LEADERS;
  }

  //filtar líder por id
  getLeader(id: string):Leader{
    return LEADERS.filter((leader)=>(leader.id==id))[0];
  }

  //filtrar por nome
  getNameLeader(): Leader{
    return LEADERS.filter((leader)=>(leader.name))[0];
  }


}
