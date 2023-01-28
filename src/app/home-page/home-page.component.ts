import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // 楽曲のYoutubeID
  songVideoIds: string[] = [
    // チョコ?レモ?
    'vctPgHMKQ-o',
    // 認めてくれなくなっていいよ
    'rxP-h-7CSPY',
    // ずるじゃん
    'jxrEVf0QvqI',
    // 追い風Running
    'gW15pu80O6I',
    // Butter-Fly
    'PUJpUotT-Kc'
  ];

  // デレステMVのYoutubeID
  mvVideoIds: string[] = [
    // サマーサイダー
    'atJPNDR0Zwo',
    // トロピカルガール
    'srbIobd-ekI',
    // TRUE COLORS
    '_-AR53Z3tXM',
    // New bright stars
    'ejVvxSL18Ko',
    // EVERLASTING
    'uZuqmwhljVo'
  ];

  readonly YOUTUBE_BASE_URL = 'https://www.youtube.com/embed?loop=1&listType=playlist&playlist=';

  // 楽曲プレイリストのURL
  songVideoURL?: SafeUrl;

  // デレステMVプレイリストのURL
  mvVideoURL?: SafeUrl;

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // 各プレイリストのURLからSafeUrlを生成
    this.songVideoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.YOUTUBE_BASE_URL + this.songVideoIds.join(','));
    this.mvVideoURL = this.domSanitizer.bypassSecurityTrustResourceUrl(this.YOUTUBE_BASE_URL + this.mvVideoIds.join(','));
  }
}
