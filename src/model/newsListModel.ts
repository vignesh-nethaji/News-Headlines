import {urlsToLogo} from '../model/urlsToLogo';
// import { newsListFullModel } from '../model/newsListFullModel';
export class newsListModel {
  id: string;
  name: string;
  description: string;
  url:string;
  category:string;
  language:string;
  country:string;
  urlsToLogos:urlsToLogo;
  sortBysAvailable:Array<string>;
}

// export class newsListModels
// {
//     status:string;
//     sources:Array<newsListFullModel>;
// }