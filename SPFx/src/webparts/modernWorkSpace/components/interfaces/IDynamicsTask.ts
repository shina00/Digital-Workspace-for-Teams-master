export interface IDynamicsTask{
    msdyn_resourceassignmentid: string;
    createdon: string;
    msdyn_fromdate: string;
    msdyn_todate: string;
    msdyn_hours: number;
    msdyn_bookableresourceid: {name: string, msdyn_primaryemail: string};
    msdyn_projectid: {msdyn_subject: string};
    msdyn_taskid: {msdyn_subject: string};
    _createdby_value: string;
}

export class DynamicsTask{
    public resourceAssignmentId: string;
    public Created: Date;
    public From: Date;
    public To: Date;
    public Hours: number;
    public Task: string;
    public Project: string;
    public BookableResourceName: string;
    public BookableResourceEmail: string;
    public CreatedById: string;

    constructor(item: IDynamicsTask){
        this.resourceAssignmentId = item.msdyn_resourceassignmentid;
        this.Created = new Date(item.createdon);
        this.From = new Date(item.msdyn_fromdate);
        this.To = new Date(item.msdyn_todate);
        this.Hours = item.msdyn_hours;
        this.Task = item.msdyn_taskid.msdyn_subject;
        this.Project = item.msdyn_projectid.msdyn_subject;
        this.BookableResourceName = item.msdyn_bookableresourceid ? item.msdyn_bookableresourceid.name : "";
        this.BookableResourceEmail = item.msdyn_bookableresourceid ? item.msdyn_bookableresourceid.msdyn_primaryemail : "";
        this.CreatedById = item._createdby_value;
    }
}