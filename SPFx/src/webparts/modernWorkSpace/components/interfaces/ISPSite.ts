export interface ISPSite{
    Id: string;
    Uri: string;
    ContentUri: string;
    ImageUri: string;
    Name: string;
}

export interface ISPSiteItems{
    '@odata.context': string;
    value: ISPSite[];
}

export class SPSite{
    public Id: string;
    public Uri: string;
    public ContentUri: string;
    public ImageUri: string;
    public Name: string;

    constructor(item: ISPSite){
        this.Id = item.Id;
        this.Uri = item.Uri;
        this.ContentUri = item.ContentUri;
        this.ImageUri = item.ImageUri;
        this.Name = item.Name;
    }
}