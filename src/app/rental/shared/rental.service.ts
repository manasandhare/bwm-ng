import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';

@Injectable()
export class RentalService {

    private rentals: Rental[] = [{
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "Times Square",
        category: "Apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"  
      },
      {
        id: "2",
        title: "Middle Apartment",
        city: "Lost Angeles",
        street: "Some Alley",
        category: "Condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 30,
        shared: false,
        createdAt: "24/12/2017"  
      },
      {
        id: "3",
        title: "Central Apartment",
        city: "Berlin",
        street: "TT Place",
        category: "Apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 26,
        shared: false,
        createdAt: "24/12/2017"  
      },
      {
        id: "4",
        title: "Central Apartment",
        city: "Moscow",
        street: "Red Square",
        category: "Apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 5,
        description: "Very nice apartment",
        dailyRate: 55,
        shared: false,
        createdAt: "24/12/2017"  
      },
      {
        id: "5",
        title: "Central Apartment",
        city: "New Delhi",
        street: "CP Square",
        category: "Apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 20,
        shared: false,
        createdAt: "24/12/2017"  
      },
      {
        id: "6",
        title: "Central Apartment",
        city: "London",
        street: "London Bridge",
        category: "Apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 1,
        description: "Very nice apartment",
        dailyRate: 60,
        shared: false,
        createdAt: "24/12/2017"  
      },
      {
        id: "7",
        title: "Central Apartment",
        city: "Rio",
        street: "Times Square",
        category: "Apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"  
      },
      {
        id: "8",
        title: "Central Apartment",
        city: "Chicago",
        street: "Times Square",
        category: "Apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"  
      }
      ];

      public getRentalById(rentalId: string): Observable<Rental>{
        return new Observable<Rental>((observer)=> {
          setTimeout(() =>{
            const foundRental = this.rentals.find((rental)=>{
              return rental.id == rentalId;
            });
            observer.next(foundRental);
          }, 500);
        });
      }

      public getRentals(): Observable<Rental[]>{
        return new Observable<Rental[]>((observer) => {

        setTimeout(() => {
          observer.next(this.rentals);
        }, 1000);
      });
    }
}