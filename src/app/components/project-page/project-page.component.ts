import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent {
  productID!: string
  @Input() set id(value: string){
    this.productID = value
  }
}
