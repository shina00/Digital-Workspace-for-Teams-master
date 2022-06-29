export interface ILeaveRequest{
    Id: string;
    Title: string;
    EmployeeName: string;
    StartDate: string;
    EndDate: string;
    UnitHeadId: string;
    UnitHead_x0020_Approval: string;
    HR_x0020_Approval: string;
    MD_x0020_Approval: string;
    Created: string;
    Modified: string;
    TypeofLeave: string;
}

export interface ILeaveRequestItems{
    '@odata.context': string;
    value: ILeaveRequest[];
}

export class LeaveRequest{
    public Id: string;
    public Title: string;
    public EmployeeName: string;
    public StartDate: Date;
    public EndDate: Date;
    public UnitHeadId: string;
    public UnitHead_x0020_Approval: string;
    public HR_x0020_Approval: string;
    public MD_x0020_Approval: string;
    public Created: Date;
    public Modified: Date;
    public TypeofLeave: string;
    public Stage: string;
    public Process: string;

    constructor(item: ILeaveRequest){
        this.Process = "leave";
        this.Id = item.Id;
        this.Title = item.Title ? item.Title : "";
        this.EmployeeName = item.EmployeeName ? item.EmployeeName : "";
        this.StartDate = new Date(item.StartDate);
        this.EndDate = new Date(item.EndDate);
        this.UnitHeadId = item.UnitHeadId;
        this.UnitHead_x0020_Approval = item.UnitHead_x0020_Approval;
        this.HR_x0020_Approval = item.HR_x0020_Approval;
        this.MD_x0020_Approval = item.MD_x0020_Approval;
        this.Created = new Date(item.Created);
        this.Modified = new Date(item.Modified);
        this.TypeofLeave = item.TypeofLeave;
        this.Stage = item.UnitHead_x0020_Approval == "Pending" ? "Unit Head" : item.HR_x0020_Approval == "Pending" ? "Human Resource" : item.MD_x0020_Approval == "Pending" ? "M.D." : item.MD_x0020_Approval == "Approved" ? "Approved" : "Start";
    }
}


export interface ILoanRequest{
    Id: string;
    Title: string;
    EmployeeName: string;
    UnitHeadApproval: string;
    HrApproval: string;
    MdApproval: string;
    FinanceApproval: string;
    Created: string;
    Modified: string;
}

export interface ILoanRequestItems{
    '@odata.context': string;
    value: ILoanRequest[];
}

export class LoanRequest{
    public Id: string;
    public EmployeeName: string;
    public Title: string;
    public UnitHeadApproval: string;
    public HrApproval: string;
    public MdApproval: string;
    public FinanceApproval: string;
    public Created: Date;
    public Modified: Date;
    public Stage: string;
    public Process: string;

    constructor(item: ILoanRequest){
        this.Process = "loan";
        this.Id = item.Id;
        this.EmployeeName = item.EmployeeName ? item.EmployeeName : "";
        this.Title = item.Title ? item.Title : "";
        this.UnitHeadApproval = item.UnitHeadApproval;
        this.HrApproval = item.HrApproval;
        this.MdApproval = item.MdApproval;
        this.FinanceApproval = item.FinanceApproval;
        this.Stage = item.UnitHeadApproval == "Pending" ? "Unit Head" : item.HrApproval == "Pending" ? "Human Resource" : item.MdApproval == "Pending" ? "M.D." : item.MdApproval == "Approved" ? "Approved" : "Start";
        this.Created = new Date(item.Created);
        this.Modified = new Date(item.Modified);
    }
}


export interface IPettyCash{
    Id: string;
    Title: string;
    EmployeeName: string;
    AuthorId: string;
    UnitHeadApproval: string;
    HrApproval: string;
    MdApproval: string;
    Created: string;
    Modified: string;
    Author: {Title: string};
}

export interface IPettyCashItems{
    '@odata.context': string;
    value: IPettyCash[];
}

export class PettyCash{
    public Id: string;
    public EmployeeName: string;
    public Title: string;
    public AuthorId: string;
    public UnitHeadApproval: string;
    public HrApproval: string;
    public MdApproval: string;
    public Created: Date;
    public Modified: Date;
    public Stage: string;
    public Process: string;
    public AuthorName: string;

    constructor(item: IPettyCash){
        this.Process = "pettyCash";
        this.Id = item.Id;
        this.EmployeeName = item.Author.Title ? item.Author.Title : "";
        this.Title = item.Title ? item.Title : "";
        this.AuthorId = item.AuthorId;
        this.UnitHeadApproval = item.UnitHeadApproval;
        this.HrApproval = item.HrApproval;
        this.MdApproval = item.MdApproval;
        this.Stage = item.UnitHeadApproval == "Pending" ? "Unit Head" : item.UnitHeadApproval == "Approved" ? "Approved" : "Start";
        this.Created = new Date(item.Created);
        this.Modified = new Date(item.Modified);
    }
}


export interface ISalaryAdv{
    Id: string;
    Title: string;
    EmployeeName: string;
    HrApproval: string;
    FinanceApproval: string;
    Created: string;
    Modified: string;
}

export interface ISalaryAdvItems{
    '@odata.context': string;
    value: ISalaryAdv[];
}

export class SalaryAdv{
    public Id: string;
    public EmployeeName: string;
    public Title: string;
    public HrApproval: string;
    public FinanceApproval: string;
    public Created: Date;
    public Modified: Date;
    public Stage: string;
    public Process: string;

    constructor(item: ISalaryAdv){
        this.Process = "salaryAdv";
        this.Id = item.Id;
        this.EmployeeName = item.EmployeeName ? item.EmployeeName : "";
        this.Title = item.Title ? item.Title : "";
        this.HrApproval = item.HrApproval;
        this.FinanceApproval = item.FinanceApproval;
        this.Stage = item.HrApproval == "Pending" ? "Human Resource" : item.FinanceApproval == "Pending" ? "Finance" : "Start";
        this.Created = new Date(item.Created);
        this.Modified = new Date(item.Modified);
    }
}

export interface ICompletedProcess{
    Id: number;
    Initiator: {Title: string, EMail: string};
    Process: string;
    ApplicationTime: string;
    ApprovalTime: string;
}
export class completedProcess{
    public Initiator: string;
    public Process: string;
    public applicationTime: Date;
    public approvalTime: Date;
    public durationSec: number;

    constructor(item: ICompletedProcess){
        this.Initiator = item.Initiator ? item.Initiator.Title : "";
        this.Process = item.Process;
        this.applicationTime = new Date(item.ApplicationTime);
        this.approvalTime = new Date(item.ApprovalTime);
        this.durationSec = (Number(this.approvalTime) - Number(this.applicationTime)) / (1000);
    }
}
export interface aggProcess{
    Process: string;
    Duration?: number;
    DurationCount?: number;
    "Avg. Duration"?: number;
    "Avg. DurationColor"?: string;
}