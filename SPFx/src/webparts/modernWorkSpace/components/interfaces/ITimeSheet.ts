import { OmaSettingStringXml } from "@microsoft/microsoft-graph-types";

export interface ITimeSheet{
    ID: number;
    Title: string;
    Week: string;
    Period: string;
    PeriodStarts: string;
    Status: string;
    Total_x0020_Hours: string;
    Created: string;
    Created_x0020_By: string;
    Supervisor: string;
    Project: string;
    Employee: string;
}

export interface ITimeSheetItem{
    '@odata.context': string;
    value: ITimeSheet[];
}

export class TimeSheet{
    public ID: number;
    public Title: string;
    public Week: string;
    public Period: string;
    public PeriodStarts: string;
    public Status: string;
    public TotalHours: string;
    public Created: Date;
    public CreatedBy: string;
    public Supervisor: string;
    public Project: string;
    public Employee: string;
    public Process: string;

    constructor(item: ITimeSheet){
        this.Process = "TimeSheet";
        this.ID = item.ID;
        this.Title = item.Title ? item.Title : "";
        this.Week = item.Week ? item.Week : "";
        this.Period = item.Period;
        this.PeriodStarts = item.PeriodStarts;
        this.Status = item.Status;
        this.TotalHours = item.Total_x0020_Hours;
        this.Created = new Date(item.Created);
        this.CreatedBy = item.Created_x0020_By;
        this.Supervisor = item.Supervisor;
        this.Project = item.Project;
        this.Employee = item.Employee ? item.Employee : "";
    }
}