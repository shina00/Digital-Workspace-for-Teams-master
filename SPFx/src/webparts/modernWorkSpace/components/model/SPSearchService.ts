import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';

import { PISearchResult } from './ISearchResult';
import { PISearchResults } from './SPResponse';
 
export default class SPSearchService{
    public static get(context: WebPartContext, siteUrlQuery: string): Promise<{value: PISearchResult[]}>{
        return context.spHttpClient.get(siteUrlQuery, SPHttpClient.configurations.v1).then(
            (resp: SPHttpClientResponse) => resp.json()
        ).then((responseJSON) =>{
            console.log(responseJSON);
            return responseJSON;
        });
    }
}