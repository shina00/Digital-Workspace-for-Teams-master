export interface ISPEventBirthday{
    Id: string;
    Title: string;
    Staff_Name: any;
    Last_Name: string;
    First_Name: string;
    Designation: string;
    Resumption_Date: string;
    Date_of_Birth: string;
    Birthday: string;
    Anniversary: string;
}

export class SPEvents{
    public Id: number;
    public Title: string;
    public Staff_Name: any;
    public Last_Name: string;
    public First_Name: string;
    public FullName: string;
    public Staff_Email:string;
    public Designation: string;
    public Resumption_Date: Date;
    public Date_of_Birth: Date;
    public Birthday: Date;
    public Anniversary: Date;
    public anniversaryThisYear: Date;
    public birthdayThisYear: Date;

    constructor(item: ISPEventBirthday){
        this.Id = Number(item.Id);
        this.Title = item.Title;
        this.Staff_Name = item.Staff_Name;
        this.Staff_Email = item.Staff_Name?item.Staff_Name['EMail']:"";
        this.Last_Name = item.Last_Name;
        this.First_Name = item.First_Name;
        this.FullName = `${item.First_Name} ${item.Last_Name}`;
        this.Designation = item.Designation;
        this.Resumption_Date = new Date(item.Resumption_Date);
        this.Date_of_Birth = new Date(item.Date_of_Birth);
        this.Birthday = new Date(item.Date_of_Birth);
        this.Anniversary = new Date(item.Resumption_Date);
        this.birthdayThisYear = (() => {
            var todayYear = (new Date()).getFullYear();
            return new Date(todayYear, this.Birthday.getMonth(), this.Birthday.getDate());
        })();
        this.anniversaryThisYear = (() => {
            var todayYear = (new Date()).getFullYear();
            return new Date(todayYear, this.Anniversary.getMonth(), this.Anniversary.getDate());
        })();
    }
}

export interface ISPEventItem{
    value: ISPEventBirthday[];
}