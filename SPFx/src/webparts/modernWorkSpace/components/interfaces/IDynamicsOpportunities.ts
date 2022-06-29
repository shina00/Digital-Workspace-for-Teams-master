
export interface IDynamicsOpportunities{
 // msdyn_resourceassignmentid: string;
 // createdon: string;
  totalamount: number;
  budgetamount: number;
  name : string;
 // todate: string;
  totalamountlessfreight: number;
  customerneed : string;
  currentsituation : string ;
  estimatedclosedate : string ;
  owninguser : {fullname : string,mobilephone : string, title : string};
  // msdyn_hours: number;
  // msdyn_bookableresourceid: {name: string, msdyn_primaryemail: string, cr4ca_department: string};
  // msdyn_projectid: {msdyn_subject: string, cr4ca_customername: string, cr4ca_unitassigned: string};
  // msdyn_taskid: {msdyn_subject: string};
   _createdby_value: string;
}


export class DynamicsOpp{
  public budgetamount: number;
  public Created: Date;
  // public From: Date;
  // public To: Date;
  public estimatedclosedate : Date;
  public totalamount: number;
  public totalamountlessfreight:number;
  //public Customer: string;
  public currentsituation: string;
  public name: string;
  public CreatedById: string;
  public customerneed: string;
  public userfullname: string;
  public usermobilephone: string;
  public usertitle: string;
  public Status: any;

  constructor(item: IDynamicsOpportunities){
      this.budgetamount = item.budgetamount;
      this.totalamount =item.totalamount ? item.totalamount : 0;
      this.estimatedclosedate = new Date(item.estimatedclosedate);
     // this.To = new Date(item.todate);
      this.name= item.name;
      this.customerneed = item.customerneed ? item.customerneed : "NOT AVAILABLE";
      this.currentsituation= item.currentsituation ?  item.currentsituation : " NOT AVAILABLE";
      this.budgetamount = item.budgetamount ? item.budgetamount : 0;
      this.totalamountlessfreight = item.totalamountlessfreight ? item.totalamountlessfreight : 0;
    //  this.BookableResourceEmail = item.bookableresourceid ? item.msdyn_bookableresourceid.msdyn_primaryemail : "";
    //  this.BookableResourceDept = item.msdyn_bookableresourceid ? item.msdyn_bookableresourceid.cr4ca_department : "";
    //  this.UnitAssigned = item.msdyn_projectid.cr4ca_unitassigned;
      this.CreatedById = item._createdby_value ? item._createdby_value : "";
      this.userfullname = item.owninguser.fullname;
      this.usermobilephone = item.owninguser.mobilephone;
      this.usertitle = item.owninguser.title;

  }
}