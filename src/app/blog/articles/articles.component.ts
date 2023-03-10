import { Component, Input, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  // ページのリスト
  public pages: ScullyRoute[] = [];

  // 記事の表示件数
  @Input()
  public numOfMaxArticles: number = 999999;

  constructor(private scully: ScullyRoutesService) {
  }

  async ngOnInit() {
    await this.loadPages();
  }

  async loadPages() {
    // ページのリストを取得
    let pages = await firstValueFrom(this.scully.available$);

    // ルートページを省く
    pages = pages?.filter((page) => {
      if (page.route === '/' || page.route === '/blog') {
        return false;
      }

      return true;
    });

    // 番号順にソート
    pages = pages.sort((pageA, pageB) => {
      if (pageA['number'] === undefined || pageB['number'] === undefined) {
        return 0;
      }
      return (pageB['number'] - pageA['number']);
    });

    // 反映
    this.pages = pages;
  }

}

