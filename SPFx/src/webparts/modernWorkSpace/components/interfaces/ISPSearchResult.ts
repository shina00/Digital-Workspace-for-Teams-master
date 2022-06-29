export interface ISPSearchResult  
{  
    Title: string;  
    Description: string;  
    Url: string;  
    Path:string;
    //Author: string;
}

export interface ILobLink{
    Title: string;
    ApplicationLink: string;
    // Author: {Id?: string, Title?: string, EMail?: string};
    AttachmentFiles: {ServerRelativeUrl: string}[];
}
export interface ILobLinkItems{
    value: ILobLink[];
}
export class LobLink{
    public title: string;
    public url: string;
    public attachImage: string;
    public createdByName: string;
    public createdByEmail: string;

    constructor(item: ILobLink){
        this.title = item.Title;
        this.url = item.ApplicationLink;
        this.attachImage = item.AttachmentFiles.length>0 ? item.AttachmentFiles[0].ServerRelativeUrl : "";
        /* this.createdByName = item.Author.Title;
        this.createdByEmail = item.Author.EMail; */
    }
}