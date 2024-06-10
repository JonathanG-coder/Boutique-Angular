import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from '../card-article/card-article.component';

@Component({
  selector: 'app-list-article',
  standalone: true,
  imports: [CommonModule, CardArticleComponent],
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.scss'],
})
export class ListArticleComponent implements OnInit {
  @Input() articles?: Article[];
  @Output() hello: EventEmitter<String> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.hello.emit("Marco");
  }
}
