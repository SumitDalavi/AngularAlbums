import { Component, OnInit } from '@angular/core';
import { Photos } from '../shared/models/photos';
import { SharedService } from '../shared/services/shared.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoDetails: Photos[];
  paramID: number;
  tmpString: any;
  constructor(
    public sharedService: SharedService,
    private route: ActivatedRoute,
    //private router: Router,
    //private params: ParamMap
  ) { }

  ngOnInit() {
    this.sharedService.getPhotos().subscribe(res => {
      var json = [];
      this.photoDetails = res;
      const id = +this.route.snapshot.paramMap.get('id');
      for (var key in this.photoDetails) {
        if (this.photoDetails[key].albumId == id) {
          json.push(this.photoDetails[key]);
        }
      }
      this.photoDetails = json;
    });
  }

  goBack() {
    window.history.back();
  }
}
