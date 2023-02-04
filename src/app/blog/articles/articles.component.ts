import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  public links$ = this.scully.available$.pipe(
    map((pages) => {

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

      pages = pages.slice(0, 3);

     return pages;

  }),
  );

  constructor(private scully: ScullyRoutesService) {
    this.links$.subscribe((links) => {
      console.log(links);
    });
  }

  ngOnInit(): void {
  }

}
function startWith(arg0: null): import("rxjs").OperatorFunction<ScullyRoute[], unknown> {
  throw new Error('Function not implemented.');
}

