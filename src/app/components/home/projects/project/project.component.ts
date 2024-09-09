import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() title!: string
  @Input() img!: string
  @Input() link!: string
  @Input() status!: 'live' | 'inactive'

}
