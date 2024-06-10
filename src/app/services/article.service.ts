import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { AbstractApi } from './abstractapi';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends AbstractApi<Article> {

  base_service = "articles/";

}
