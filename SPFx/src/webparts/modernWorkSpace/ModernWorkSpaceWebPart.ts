import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  MSGraphClient,
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckSquare,faWindowClose,faCheckCircle, faCoffee,faEnvelope,faTrash,faMobileAlt,faEnvelopeOpen,faChalkboardTeacher,faPhoneAlt,faBusinessTime,faAddressBook,faUserCircle,
faInbox,faUsers,faCalendar,faCalendarWeek,faUserAstronaut,faPlus,faTasks,faDoorClosed,faFolder,faFolderOpen,faFolderPlus,faNewspaper,faKiwiBird} from '@fortawesome/free-solid-svg-icons';
 
library.add(faCheckSquare,faWindowClose,faCheckCircle, faCoffee,faEnvelope,faTrash,faMobileAlt,faEnvelopeOpen,faChalkboardTeacher,faPhoneAlt,faBusinessTime,faAddressBook,faInbox,
  faUserCircle,faUsers,faCalendar,faCalendarWeek,faUserAstronaut,faPlus,faTasks,faDoorClosed,faFolder,faFolderOpen,faFolderPlus,faNewspaper,faKiwiBird);

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox, IPropertyPaneField, IPropertyPaneCheckboxProps
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'ModernWorkSpaceWebPartStrings';
import ModernWorkSpace from './components/ModernWorkSpace';
import { IModernWorkSpaceProps } from './components/IModernWorkSpaceProps';

export interface IModernWorkSpaceWebPartProps {
  description: string;
  lists: string | string[];
  showSlider: boolean;
  showWelcome: boolean;
  showEmail: boolean;
  showTeams: boolean;
  showTasks: boolean;
  showCalendar: boolean;
  showEvent: boolean;
  showBirthday: boolean;
  showAnnouncement: boolean;
  showAnniversary: boolean;
  showMDDesk: boolean;
  showOnedrive: boolean;
  showLauncher: boolean;
  showLOB: boolean;
  showStaffDir: boolean;
  showMyAnalytics: boolean;
  showDepartmentalAnalytics: boolean;
}
export default class ModernWorkSpaceWebPart extends BaseClientSideWebPart <IModernWorkSpaceWebPartProps> {
  private webpartList: any[] = [];
  private _isDarkTheme: boolean = false;

  private _environmentMessage: string = '';



  // protected onInit(): Promise<void> {

  //   this._environmentMessage = this._getEnvironmentMessage();



  //   return super.onInit();

  // }
  public render(): void {
    const element: React.ReactElement<IModernWorkSpaceProps> = React.createElement(
      ModernWorkSpace,
      {
        wbProperties: this.properties,
        description: this.properties.description,
        spHttpClient: this.context.spHttpClient,
        pageContext: this.context.pageContext,
        context: this.context,
        list: this.properties.lists,
        serviceScope: this.context.serviceScope,
        //siteUrl: `https://airteltigo.sharepoint.com/sites/AirTelTiGoDigitalWorkspace`,
        //siteUrl2: `https://airteltigo.sharepoint.com/sites/AirTelTiGoDigitalWorkspace`,
        siteUrl: `https://relianceinfo.sharepoint.com/sites/Portal1`,
        siteUrl2: `https://relianceinfo.sharepoint.com/sites/RelianceIntranetPortal2`,
        subSitePath: this.context.pageContext.web.serverRelativeUrl,
        dynamicsUri: "https://relianceinfo.crm4.dynamics.com",
        listTitle: `ProdList`
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected onPropertyPaneConfigurationStart(): void {
    /* console.log("PropertyPane OnStart");
    console.log(this.webpartList);
    if(this.webpartList.length>0) return;

    this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Getting available WebParts");
    this.GetWebparts()
      .then(wbResponse => {
        console.log(`wbResponse`, wbResponse);
        this.webpartList = wbResponse;
        this.context.propertyPane.refresh();
        this.context.statusRenderer.clearLoadingIndicator(this.domElement);
        this.render();
      }); */
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            },
            {
              groupName: "WebParts",
              groupFields: [
                  PropertyPaneCheckbox("showSlider",
                  {text:"Gallery Slider", checked:true, disabled:true}
                ),
                  PropertyPaneCheckbox("showWelcome",
                  {text:"Welcome", checked:true, disabled:true}
                ),
                  PropertyPaneCheckbox("showEmail",
                  {text:"Emails", checked:true, disabled:true}
                ),
                  PropertyPaneCheckbox("showTeams",
                  {text:"Teams", checked:true, disabled:true}
                ),
                PropertyPaneCheckbox("showTasks",
                  {text:"My Tasks", checked:true, disabled:false}
                  ),
                PropertyPaneCheckbox("showCalendar",
                  {text:"My Calendar", checked:true, disabled:false}
                ),
                PropertyPaneCheckbox("showEvent",
                {text:"Events", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showBirthday",
                {text:"Birthdays", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showAnnouncement",
                {text:"Announcements", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showAnniversary",
                {text:"Anniversary", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showMDDesk",
                {text:"MD's Desk", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showOnedrive",
                {text:"Onedrive", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showLauncher",
                {text:"Launcher", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showLOB",
                {text:"Line of Business App", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showStaffDir",
                {text:"Staff Directory", checked:true, disabled:false}
              ),  
                PropertyPaneCheckbox("showDepartmentalAnalytics",
                {text:"Departmental Analytics", checked:true, disabled:false}
              ),
                PropertyPaneCheckbox("showMyAnalytics",
                {text:"My Analytics", checked:true, disabled:false}
              )
              
              ]
            }
          ]
        }
      ]
    };
  }

  private GetWebparts():Promise<IPropertyPaneField<IPropertyPaneCheckboxProps>[]>
  {  
    console.log("GetWebpart Started");
    // REST API to pull the list names  
    let listresturl: string = this.context.pageContext.web.absoluteUrl + "/_api/web/lists/getbytitle('WebParts')/items?$select=Id,Title,WebpartID";  
    
    let listResponse = this.LoadWebparts(listresturl).then((response)=>{  
      // Render the data in the web part  
      let result = this.LoadDropDownValues(response.value);
      console.log("GetWebpart result", result);

      return result;
    });
    
    return listResponse;
  }

  private LoadWebparts(listresturl:string): Promise<any>{
    console.log("LoadWebparts started");
    return this.context.spHttpClient.get(listresturl, SPHttpClient.configurations.v1).then((response)=>{
      return response.json();  
    });  
  }  
    
  private LoadDropDownValues(list:any[]): Promise<IPropertyPaneField<IPropertyPaneCheckboxProps>[]>{  
    return new Promise<IPropertyPaneField<IPropertyPaneCheckboxProps>[]>((resolve, reject) => {
      resolve(list.map(item => PropertyPaneCheckbox(
        item.WebpartID,
        {text:item.Title}
      )
      ));
    });  

    console.log(this.webpartList);
  }  
  
}

