import { AfterViewInit, Component } from '@angular/core';


declare var $: any; // jQuery
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    $('.owl-carousel').owlCarousel({
      loop: true,
      // margin: 10,
      nav: true,
      navText:  ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    });
  }

}
