export interface ProjectDetails {
    headline: string,
    client?: string | null,
    project?: string | null,
    studio?: string | null,
    overview: string,
    imgs: {
        hero: 'string', "set": string[]
    }
}
