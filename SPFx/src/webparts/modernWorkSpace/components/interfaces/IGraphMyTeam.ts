export interface IGraphMyTeam{
    id: string;
    displayName: string;
    webUrl: string;
}

export interface IGraphMyTeamItems{
    '@odata.context': string;
    '@odata.count': number;
    value: IGraphMyTeam[];
}

export class GraphMyTeam{
    public teamId: string;
    public groupId: string;
    public displayName: string;
    public webUrl: string;

    constructor(item: IGraphMyTeam, groupID = "", webURL = ""){
        this.teamId = item.id;
        this.groupId = groupID;
        this.displayName = item.displayName;
        this.webUrl = webURL;
    }
}

export interface IGraphTeamMessage{
    id: string;
    createdDateTime: string;
    webUrl: string;
    body: {contentType: string, content: string};
    from: {
        user: {id: string, displayName: string}
    };
    mentions: [
        {mentioned: {
            user: {id: string, displayName: string}
        }}
    ];
}

export interface IGraphTeamMessageItems{
    '@odata.context': string;
    '@odata.count': number;
    value: IGraphTeamMessage[];
}

export class GraphTeamMessage{
    public id: string;
    public createdDateTime: Date;
    public webUrl: string;
    public body: {contentType: string, content: string};
    public from: {
        user: {id: string, displayName: string}
    };
    public mentions: [
        {mentioned: {
            user: {id: string, displayName: string}
        }}
    ];

    constructor(item: IGraphTeamMessage){
        this.id = item.id;
        this.createdDateTime = new Date(item.createdDateTime);
        this.webUrl = item.webUrl;
        this.body = item.body;
        this.from = item.from;
        this.mentions = item.mentions;
    }
}