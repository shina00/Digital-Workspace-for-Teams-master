export interface IGraphDriveFile{
    id: string;
    createdDateTime: string;
    lastModifiedDateTime: string;
    name: string;
    webUrl: string;
    createdBy: {
        user: {email: string, displayName: string;}
    };
    lastModifiedBy: {
        user: {email: string, displayName: string;}
    };
    file: {mimeType: string};
}

export interface IGraphDriveFileItems{
    '@odata.context': string;
    value: IGraphDriveFile[];
}

export class GraphDriveFile{
    public id: string;
    public createdDateTime: Date;
    public lastModifiedDateTime: Date;
    public name: string;
    public webUrl: string;
    public createdBy: {
        user: {email: string, displayName: string;}
    };
    public lastModifiedBy: {
        user: {email: string, displayName: string;}
    };
    public fileType: string;

    constructor(item: IGraphDriveFile){
        this.id = item.id;
        this.createdDateTime = new Date(item.createdDateTime);
        this.lastModifiedDateTime = new Date(item.lastModifiedDateTime);
        this.name = item.name;
        this.webUrl = item.webUrl;
        this.createdBy = item.createdBy;
        this.lastModifiedBy = item.lastModifiedBy;
        this.fileType = item.file.mimeType;
    }
}