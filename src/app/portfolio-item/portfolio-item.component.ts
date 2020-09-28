import { Component, OnInit } from '@angular/core';
import { portfolioItems } from '../portfolio-items';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})

export class PortfolioItemComponent implements OnInit {
  portItems = portfolioItems;

  constructor() { }

  ngOnInit(): void {
  }

}
