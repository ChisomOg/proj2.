import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { group } from '@angular/animations';
import { map, Observable, timer } from 'rxjs';
interface carouselImage {
  imageSrc: String;
  imageAlt: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAni', [
      transition(':increment', [
        style({
          position: 'relative',
          overflow: 'hidden'
        }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            display: 'block',
          })
        ], {optional:true}),
        group([
          query(':leave', [
            animate('200ms ease-in', style({
              opacity: 0,
              transform: 'translateX(-80px)'
            }))
          ], {optional: true}),

         query(':enter', [
           style({
            transform: 'translateX(80px)',
            opacity:0
           }),
           animate('250ms 100ms ease-out' ,style({
             opacity: 1,
             transform: 'translateX(0)'
           }))
         ], {optional: true})
        ])
        
        ]),
        // decrement animation
        transition(':decrement', [
          style({
            position: 'relative',
            overflow: 'hidden'
          }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100%',
              display: 'block',
            })
          ], {optional:true}),
          group([
            query(':leave', [
              animate('200ms ease-in', style({
                opacity: 0,
                transform: 'translateX(80px)'
              }))
            ], {optional: true}),
  
           query(':enter', [
             style({
              transform: 'translateX(-80px)',
              opacity:0
             }),
             animate('250ms 100ms ease-out' ,style({
               opacity: 1,
               transform: 'translateX(0)'
             }))
           ], {optional: true})
          ])
          
          ])
   ])
  ]
})
export class AppComponent implements OnInit{
  

  @Input() images: carouselImage[] = [
    {
      imageSrc:
      'assets/images/images1.jpeg',
      imageAlt: 'source1',
    },
    {
      imageSrc:
      'assets/images/pic6.jpg',
      imageAlt: 'source2',
    },
    {
      imageSrc:
      'assets/images/pic1.jpg',
      imageAlt: 'source3',
    },
    {
      imageSrc:
      'assets/images/pic.jpg',
      imageAlt: 'source4',
    },
    {
      imageSrc:
      'assets/images/images2.jpeg',
      imageAlt: 'source5',
    }
  ];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;

  selectedIndex = 0;



  title = 'Angular bity';

  dateTime!:Observable<Date>

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
        return new Date()
      })
    )
  }

  prepareRoute(outlet: RouterOutlet): any{
    if (outlet.isActivated) return outlet.activatedRouteData['tabN']
  };

  selectImage(index: number): void {
    this.selectedIndex = index
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    }else {
      this.selectedIndex--;
    }
    this.saveState()
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    }else {
      this.selectedIndex++;
    }
    this.saveState()
  }

  saveState(){
    localStorage.setItem('', JSON.stringify(this.images))
  }

  loadState(){
    try {
      const inStorage = JSON.parse(localStorage.getItem('bookmark')!)
     
      this.images.length = 0
      this.images.push(...inStorage)
    }catch(e){
      console.log('There was an error')
      console.log(e)
    }
  }
}
