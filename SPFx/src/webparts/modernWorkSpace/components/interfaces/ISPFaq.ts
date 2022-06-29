export interface ISPFaq{
    ID: number | string;
    id?: number | string;
    Question: string;
    Answer: string;
    Link: {Url: string};
    Created: string;
    Modified: string;
}

export interface ISPFaqItems{
    '@odata.context': string;
    value: ISPFaq[];
}

export class SPFaq{
    public ID: number | string;
    public Question: string;
    public Answer: string;
    public LinkUrl: string;
    public Created: Date;
    public Modified: Date;

    constructor(item: ISPFaq){
        this.ID = item.ID || item.id;
        this.Question = item.Question;
        this.Answer = item.Answer;
        this.LinkUrl = item.Link ? item.Link.Url : "";
        this.Created = new Date(item.Created);
        this.Modified = new Date(item.Modified);
    }
}