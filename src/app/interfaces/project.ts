import { ProjectDetails } from "./project-details"

export interface Project {
    id: number,
    title: string,
    img: string,
    link: string,
    status: 'live' | 'inactive'
    details: ProjectDetails
}
