import { Component, OnInit, Input } from '@angular/core';
import { StoryblokService } from 'src/app/services/storyblok.service';
 
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
 
export class GridComponent implements OnInit {
  components: any;
  constructor(private storyblok: StoryblokService) {
    import('src/app/components').then(cp => {
      this.components = cp.Components;
    });
  }
 
  @Input() columns: any[];
  @Input() _editable: any;
 
  ngOnInit() {}
}