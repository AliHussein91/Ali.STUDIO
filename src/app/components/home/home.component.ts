import { Component } from '@angular/core';
import { ProjectComponent } from './projects/project/project.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
