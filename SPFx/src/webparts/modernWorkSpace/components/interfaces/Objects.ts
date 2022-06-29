export class User{
    //@odata.context: https://graph.microsoft.com/v1.0/$metadata#users/$entity;
    public businessPhones: [];
    public displayName: string;
    public givenName: string;
    public jobTitle: string;
    public mail: string;
    public mobilePhone: string;
    public officeLocation: string;
    public preferredLanguage: string;
    public surname: string;
    public userPrincipalName: string;
    public id: string;
}

export class Activity{
   public activity: string;
   public startDate: string;
   public endDate: string;
   public id: string;
   public timeZoneUsed: string;
   public duration: string;
   public parsedDuration?: number;
   public afterHours: string;
   public readMail: string;
   public sentMail: string;
   public organized: string;
   public reccuring: string;
   public long: string;
   public conflicting: string;
   public multitasking: string;
}

export class GroupedActivity{
    public Email?: Activity[];
    public Focus?: Activity[];
    public Meeting?: Activity[];
    public Chat?: Activity[];
    public Call?: Activity[];
}
export class CollaborationActivity{
    public Email?: Activity[];
    public Focus?: Activity[];
    public Meeting?: Activity[];
    public "Chat/Call"?: Activity[];
   
}
export class AggregatedActivity{
    public activity: string;
    public activityList: Activity[];
    public aggregatedDuration: number;
    public aggregatedAfterHours: number;
}

export class LineGraphData{
    public id: string;
    public color: string;
    public data: LineGraphInData[];
}

export class LineGraphInData{
    public x: string;
    public y: string;
}

export class PieGraphData{
    public id: string | number;
    public value: number;
    [key: string]: string | number
   // public  id: string;
    //public  label: string;
   // public  value: number;
   // public  color:  string;
}

export class PieData{
    public id: string | number;
    public value: number;
    [key: string]: string | number
   // public  id: string;
    //public  label: string;
   // public  value: number;
   // public  color:  string;
}




