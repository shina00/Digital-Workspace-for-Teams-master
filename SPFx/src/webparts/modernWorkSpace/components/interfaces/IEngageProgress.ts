export interface IEngageProgress{
    ID: number;
    Title: string;
    Project_x0020_Title: string;
    Project_x0020_Description: string;
    Engagement_x0020_Stage: string;
    Unit: string;
    Client_x0020_Name: string;
    Created: string;
    Modified: string;
    EngagementStages: string;
    Author: {EMail: string, Department: string, Title: string};
}

export interface IEngageProgressItem{
    value: IEngageProgress[];
}

export class EngageProgress{
    public ID: number;
    public Title: string;
    public ProjectTitle: string;
    public ProjectDescription: string;
    public EngagementStage: string;
    public Unit: string;
    public ClientName: string;
    public Created: Date;
    public Modified: Date;
    public AuthorEmail: string;
    public AuthorDepartment: string;
    public AuthorName: string;

    constructor(item: IEngageProgress){
        this.ID = item.ID;
        this.Title = item.Title;
        this.ProjectTitle = item.Project_x0020_Title ? item.Project_x0020_Title : "";
        this.ProjectDescription = item.Project_x0020_Description ? item.Project_x0020_Description : "";
        this.EngagementStage = item.EngagementStages ? item.EngagementStages : null;
        this.Unit = item.Unit;
        this.ClientName = item.Client_x0020_Name;
        this.Created = new Date(item.Created);
        this.Modified = new Date(item.Modified);
        this.AuthorEmail = item.Author.EMail;
        this.AuthorDepartment = item.Author.Department;
        this.AuthorName = item.Author.Title;
    }
}