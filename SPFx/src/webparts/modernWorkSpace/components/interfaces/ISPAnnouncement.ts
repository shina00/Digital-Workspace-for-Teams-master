export interface ISPAnnouncement{
    Id: string;
    id?: string;
    Title: string;
    Description: string;
    AuthorId?: string;
    AuthorLookupId?: string;
}

export interface ISPAnnouncementItems{
    '@odata.context': string;
    value: ISPAnnouncement[];
}

export class SPAnnouncement{
 public Created(Created: any) {
    throw new Error('Method not implemented.');
  }
    public Id: string;
    public Title: string;
    public Description: string;
    public AuthorId: string;
    public AttachmentServerURL: string;

    constructor(item: ISPAnnouncement){
        this.Id = item.Id || item.id;
        this.Title = item.Title;
        this.Description = item.Description;
        this.AuthorId = item.AuthorId || item.AuthorLookupId;
    }
}