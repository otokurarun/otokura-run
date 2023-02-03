import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';

declare var ng: any;

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ArticleDetailComponent implements OnInit {
  public page$ = this.scully.getCurrent();

  constructor(private router: Router, private route: ActivatedRoute, private scully: ScullyRoutesService) { }

  ngOnInit(): void {
  }
}
