export interface IGraphMail{
    id: string;
    receivedDateTime: string;
    hasAttachments: boolean;
    subject: string;
    bodyPreview: string;
    webLink: string;
    from: object;
    

}

export interface IGraphMailItems{
    value: IGraphMail[];
}

export class GraphMail{
    public id: string;
    public receivedDateTime: Date;
    public hasAttachments: boolean;
    public subject: string;
    public bodyPreview: string;
    public webLink: string;
    public from: string;

    constructor(item: IGraphMail){
        this.id = item.id;
        this.receivedDateTime = new Date(item.receivedDateTime);
        this.hasAttachments = item.hasAttachments;
        this.subject = item.subject;
        this.bodyPreview = item.bodyPreview;
        this.webLink = item.webLink;
        this.from = item.from["emailAddress"]["name"];
        
    }
}