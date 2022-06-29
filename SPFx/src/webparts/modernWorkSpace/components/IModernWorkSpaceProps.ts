import { SPHttpClient } from '@microsoft/sp-http';
import { PageContext } from '@microsoft/sp-page-context';
import { MSGraphClient } from '@microsoft/sp-http';
import { ServiceScope } from '@microsoft/sp-core-library';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { RefObject } from 'office-ui-fabric-react';
import {IModernWorkSpaceWebPartProps} from '../ModernWorkSpaceWebPart';


export interface IModernWorkSpaceProps {
  description: string;
  //isDarkTheme: boolean;
 // environmentMessage: string;
  // hasTeamsContext: boolean;
  // userDisplayName: string;
   spHttpClient: SPHttpClient;
   headerColor?: string;
   pageContext: PageContext;
   context: WebPartContext;
   serviceScope: ServiceScope;
  siteUrl: string;
  siteUrl2: string;
   subSitePath:string;
   list: string | string[];
   listTitle: string;
   wbProperties: IModernWorkSpaceWebPartProps;
   dynamicsUri: string;
  //itemRef: RefObject;
  //interval: Number;
  //Stop: Boolean;
  //customers: string;
  // graphClient: MSGraphClient;
}


