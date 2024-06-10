import { Component, OnInit } from '@angular/core';
import { ListArticleComponent } from '../list-article/list-article.component';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { ItemPanier } from '../../models/item-panier';
import { ListItemPanierViewComponent } from "../list-item-panier-view/list-item-panier-view.component";
import { PanierViewComponent } from '../panier-view/panier-view.component';

@Component({
    selector: 'app-achats-view',
    standalone: true,
    templateUrl: './achats-view.component.html',
    styleUrl: './achats-view.component.scss',
    imports: [ListArticleComponent, ListItemPanierViewComponent, PanierViewComponent]
})
export class AchatsViewComponent implements OnInit {
  articlesAch: Article[] | undefined;
  itemsPanier: ItemPanier[] | undefined;
  articleCount: number = 0; // Propriété qui me sert à  stocker le nombre d'articles
  
  constructor(private articleService: ArticleService) {}

  /**
   * On initialise le composant en récupérant tous les articles disponibles
   */
  ngOnInit(): void {
    this.articleService.getAll().subscribe((data) => {
      this.articlesAch = data;
      this.articleCount = data.length; 
    });
  }

  /**
   * Méthode de test pour gérer l'appel d'un composant enfant 
   * (Demandé dans le cours par MARC)
   * @param rNameChild Nom du composant enfant qui a appelé cette méthode
   */
  testRetourEnfant(rNameChild: String) {
    console.log("l'enfant %s m'a appelé !", rNameChild);
  }
}
