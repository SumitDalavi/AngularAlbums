import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { Albums } from '../shared/models/albums';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumDetails: Albums[];
  paramID: number;
  tmpString: any;
  constructor(
    public sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    // private params: ParamMap
  ) { }

  ngOnInit() {
    this.sharedService.getAlbums().subscribe(res => {
      var json = [];
      this.albumDetails = res;
      const id = +this.route.snapshot.paramMap.get('id');
      for (var key in this.albumDetails) {
        if (this.albumDetails[key].userId == id) {
          json.push(this.albumDetails[key]);
        }
      }
      this.albumDetails = json;
    });
  }

  getUserPhoto(id) {
    this.router.navigate(['/photos', id]);
  }

  goBack() {
    window.history.back();
  }

}
