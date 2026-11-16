import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';

@Injectable()
export class TravelService {
  private trips =[{id:1,name:'to china',price:9000},
    {id:2,name:'to marroco', price:4000}
  ]
  create(createTravelDto: CreateTravelDto) {
    return 'planifier votre voyage ici ';
  }

  findAll() {
    return this.trips ;
  }

  findOne(id: number) {
     const trip=this.trips.find((trip)=>trip.id===id);
     return trip
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}
