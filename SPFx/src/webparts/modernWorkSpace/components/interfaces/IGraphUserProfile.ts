export interface IGraphUserProfile{
    filter:string;
    id: string;
    displayName: string;
    mail: string;
    jobTitle: string;
    mobilePhone: string;
    department: string;
    directReports: any;
    userPrincipalName: string;
    businessPhones?: string[];
    employeeId?: string;
    
}

export interface IGraphUserProfileItems{
    '@odata.context': string;
    value: IGraphUserProfile[];
}


export class GraphUserProfile{
    public id: string;
    public displayName: string;
    public mail: string;
    public jobTitle: string;
    public mobilePhone: string;
    public department: string;
    public directReports: any;
    public userPrincipalName: string;
    public businessPhones?: string[];
    public manager?: any;
    public Birthday?: Date;
    public dummyBirthday?: Date;
    public filter:string;

    

    constructor(item: IGraphUserProfile){
        this.id = item.id;
        this.displayName = item.displayName ? item.displayName : "";
        this.mail = item.mail ? item.mail : "";
        this.jobTitle = item.jobTitle;
        this.mobilePhone = item.mobilePhone;
        this.department = item.department ? item.department : "";
        this.directReports = item.directReports;
        this.userPrincipalName = item.userPrincipalName;
        this.businessPhones = item.businessPhones ? item.businessPhones : [];   
        this.Birthday = item.employeeId ? new Date(item.employeeId) : null;
        this.dummyBirthday = item.employeeId ? new Date(item.employeeId) : null;
        this.filter = item.filter;
    }
}


export interface ISPUsers{
    Id: string;
    Title: string;
    Email:string;
}

export class SPUsers{
    public Id: string;
    public Title: string;
    public Email:string;

    constructor(item: ISPUsers){
        this.Id = item.Id;
        this.Title = item.Title ? item.Title : "";
        this.Email = item.Email ? item.Email : "";
    }
}