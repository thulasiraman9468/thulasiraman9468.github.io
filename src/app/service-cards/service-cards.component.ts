import { Component } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  imports: [],
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.css'
})
export class ServiceCardsComponent {
  services = [
    {
      title: 'Operational Analysis',
      description: 'Identify bottlenecks and optimize workflow.',
      icon: 'assets/icons/operational-icon.svg'
    },
    {
      title: 'Strategy Planning',
      description: 'Setting priorities and aligning business objectives.',
      icon: 'assets/icons/strategy-icon.svg'
    },
    {
      title: 'Financial Advising',
      description: 'Providing expert guidance on managing finances.',
      icon: 'assets/icons/financial-icon.svg'
    }
  ];
}
