import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Project } from '../interfaces/project';
import { inject } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

export const projectResolver: ResolveFn<Project[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(ProjectsService).getProjectByTitle(route.paramMap.get('title')!);
};
