import { Component, OnInit } from '@angular/core';
import { StoryblokService } from '../services/storyblok.service';
import { Components } from '../components';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  story = {content: null, name: ''};
  components = Components;
 
  constructor(private storyblokService: StoryblokService) {
    window['storyblok'].init();
    window['storyblok'].on(['change', 'published'],  function() {
      location.reload()
    });
  }
 
  ngOnInit() {
    this.storyblokService.getStory('blog', {version: 'draft'})
      .then(data => this.story = data.story);
  }
}
