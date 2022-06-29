
export interface PISearchResult{
    ID: string;
    Title: string;
    Created: string;
    Modified: string;
    BusinessValue: string;
    Attachments: string;
    ExistingCustomer: string;
    GUID: string;
    Preview: string;
    Features: string;
    TargetMarket: string;
    competingProducts: string;
    problemSolved: string;
    prodOverview: string;
    Author: {ID: string, Title: string, EMail: string, Department: string};
    Editor: {ID: string, Title: string, EMail: string, Department: string};
    AttachmentFiles: {FileName: string, ServerRelativeUrl: string}[];
    LOGO: {Description: string, Url: string};
    OnePager: {Description: string, Url: string};
    ProductLogo: string;
}

export class PSearchResult{
    public ID: number;
    public Title: string;
    public Created: Date;
    public Modified: Date;
    public BusinessValue: string;
    public Attachments: boolean;
    public ExistingCustomer: string;
    public GUID: string;
    public Features: string;
    public Preview: string;
    public TargetMarket: string;
    public competingProducts: string;
    public problemSolved: string;
    public prodOverview: string;
    public AuthorID: string;
    public AuthorName: string;
    public AuthorEmail: string;
    public AuthorDepartment: string;
    public EditorID: string;
    public EditorName: string;
    public EditorEmail: string;
    public EditorDepartment: string;
    public AttachmentFiles: {FileName: string, ServerRelativeUrl: string}[];
    public logoUrl: string;
    public onePagerUrl: string;
    public ProductLogo: string;

    constructor(item: PISearchResult){
        this.ID = Number(item.ID);
        this.Title = item.Title;
        this.Created = new Date(item.Created);
        this.Modified = new Date(item.Modified);
        this.BusinessValue = item.BusinessValue;
        this.Attachments = Boolean(item.Attachments);
        this.GUID = item.GUID;
        this.Features = item.Features;
        this.Preview = item.Preview;
        this.ExistingCustomer = item.ExistingCustomer ? item.ExistingCustomer : "";
        this.Preview = item.Preview;
        this.TargetMarket = item.TargetMarket ? item.TargetMarket : "";
        this.competingProducts = item.competingProducts;
        this.problemSolved = item.problemSolved;
        this.prodOverview = item.prodOverview;
        this.AuthorID = item.Author.ID;
        this.AuthorName = item.Author.Title;
        this.AuthorEmail = item.Author.EMail;
        this.AuthorDepartment = item.Author.Department;
        this.EditorID = item.Editor.ID;
        this.EditorName = item.Editor.Title;
        this.EditorEmail = item.Editor.EMail;
        this.EditorDepartment = item.Editor.Department;
        this.AttachmentFiles = item.AttachmentFiles;
        this.logoUrl = item.LOGO ? item.LOGO.Url : "";
        this.onePagerUrl = item.OnePager ? item.OnePager.Url : "";
        this.ProductLogo = item.ProductLogo;
    }
}

export default PISearchResult;