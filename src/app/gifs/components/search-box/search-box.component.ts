import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  // inyectar servicio en el constructor
  constructor(private gifsService: GifsService) { }
  // método para buscar etiqueta
  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    if (newTag.trim().length === 0) {
      return;
    }
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }

}
