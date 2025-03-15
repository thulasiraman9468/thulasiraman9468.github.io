import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-eezz',
  imports: [CommonModule],
  templateUrl: './eezz.component.html',
  styleUrl: './eezz.component.css'
})
export class EezzComponent  implements OnInit, OnDestroy {
  slides = [
    {
      image: 'assets/images/tech-screen.jpeg',
      heading: 'Where The Expertise<br>Create A Solution',
      subheading: 'Increase confidence with an IT plan purpose built for your current challenges, and future goals.',
      cardText: 'Join industry experts as we dive into the opportunities, challenges, and ethical questions shaping AI and its impact on business and society'
    },{
      image: 'assets/images/eezz-persons.jpeg',
      heading: 'Innovative Technology<br>Custom Solutions',
      subheading: 'We understand your business needs and provide tailored IT solutions to drive growth and efficiency.',
      cardText: 'Explore our comprehensive suite of services designed to empower your organization with cutting-edge technology'
    },
    {
      image: 'assets/images/laptops.jpeg',
      heading: 'Secure & Reliable<br>IT Infrastructure',
      subheading: 'Build a solid foundation for your business with our secure, scalable, and future-proof technology solutions.',
      cardText: 'Learn how our cybersecurity expertise can protect your valuable data and business operations from emerging threats'
    },
    // {
    //   image: 'assets/images/laptops.jpeg',
    //   title: 'Slide 3',
    //   descritpion: 'Caption for slide 3'
    // }
  ];
  currentIndex: number = 0;
  timer: any;
  
  ngOnInit() {
    this.startSlideshow();
  }
  
  ngOnDestroy() {
    this.stopSlideshow();
  }
  
  startSlideshow() {
    this.timer = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
  
  stopSlideshow() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  
  setCurrentSlide(index: number) {
    this.currentIndex = index;
    // Reset the timer when manually changing slides
    this.stopSlideshow();
    this.startSlideshow();
  }
}