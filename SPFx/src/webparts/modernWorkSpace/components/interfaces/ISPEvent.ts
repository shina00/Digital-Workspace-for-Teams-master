import { Event, ItemBody, Location, Recipient } from '@microsoft/microsoft-graph-types';

export interface ISPEvent{
    ID: number;
    Created: string;
    GUID: string;
    EventDate: string;
    EndDate: string;
    Location: string;
    Title: string;
    Category: string;
    fRecurrence: Boolean;
    fAllDayEvent: Boolean;
    Description: string;
}

export class myOutlookEvent{
    public id: string;
    public subject: string;
    public bodyPreview: string;
    // public body: ItemBody;
    public webLink: string;
    public startTime: Date;
    public endTime: Date;
    public location: Location;
    public organizer: Recipient;
    public isOnlineMeeting: Boolean;
    public onlineMeeting: any;
    public onlineMeetingUrl: string;
    
    public calcTime(utcDT) {
        var d = new Date(utcDT);
        return new Date(d.getTime() - (d.getTimezoneOffset() * 60000));
    }

    constructor(item: Event){
        this.id = item.id;
        this.subject = item.subject;
        this.bodyPreview = item.bodyPreview;
        // this.body = item.body;
        this.webLink = item.webLink;
        this.startTime = this.calcTime(item.start.dateTime);
        this.endTime = this.calcTime(item.end.dateTime);
        this.location = item.location;
        this.organizer = item.organizer;
        this.isOnlineMeeting = item["isOnlineMeeting"];
        this.onlineMeeting = item["onlineMeeting"];
        this.onlineMeetingUrl = item["onlineMeeting"] ? item["onlineMeeting"]["joinUrl"] : item.onlineMeetingUrl;
    }
}

export interface ISPEventItems{
    value: ISPEvent[];
}

export class SPEvent{
    public ID: number;
    public Created: Date;
    public GUID: string;
    public EventDate: Date;
    public EndDate: Date;
    public Location: string;
    public Title: string;
    public Category: string;
    public fRecurrence: Boolean;
    public fAllDayEvent: Boolean;
    public Description: string;

    constructor(item: ISPEvent){
        let eventDate: Date = new Date(item.EventDate);
        
        this.ID = item.ID;
        this.Created = new Date(item.Created);
        this.GUID = item.GUID;
        this.EventDate = item.fRecurrence ? new Date(new Date().getFullYear(), eventDate.getMonth(), eventDate.getDate()) : eventDate;
        this.EndDate = new Date(item.EndDate);
        this.Location = item.Location ? item.Location : "Undisclosed Location";
        this.Title = item.Title ? item.Title: "";
        this.Category = item.Category ? item.Category : "";
        this.fRecurrence = item.fRecurrence;
        this.fAllDayEvent = item.fAllDayEvent;
        this.Description = item.Description ? item.Description : "No Description";
    }
}
