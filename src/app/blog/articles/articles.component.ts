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
    // ルートページを省く
    map((pages) => pages?.filter((page) => {
      if (page.route === '/' || page.route === '/blog') {
        return false;
      }
      return true;
    })),
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

