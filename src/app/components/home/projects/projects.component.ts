import { Component } from '@angular/core';
import { Project } from '../../../interfaces/project';
import { ProjectsService } from '../../../services/projects.service';
import { ProjectComponent } from "./project/project.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {
    this.projects = this.projectService.projectsList;
  }
}
