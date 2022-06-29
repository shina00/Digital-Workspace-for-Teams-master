export interface ISPLineExtn{
    ID: number;
    Office: string;
    Role: string;
    ExtNo: string;
}

export interface ISPLineExtnItems{
    '@odata.context': string;
    value: ISPLineExtn[];
}

export class SPLineExtn{
    public ID: number;
    public Office: string;
    public Role: string;
    public ExtNo: string;

    constructor(item: ISPLineExtn){
        this.ID = item.ID;
        this.Office = item.Office;
        this.Role = item.Role;
        this.ExtNo = item.ExtNo;
    }
}