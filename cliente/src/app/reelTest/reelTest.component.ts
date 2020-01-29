import { Component, OnInit } from '@angular/core';
import { ServiceAllService } from "../../service/service-all.service";
import { TestReel } from "../../model/testReel";

@Component({
  selector: 'app-reelTest',
  templateUrl: './reelTest.component.html',
  styleUrls: ['./reelTest.component.css']
})
export class ReelTestComponent implements OnInit {

  test: TestReel[];

  constructor(
    private serviceTest: ServiceAllService,
  ) { }

  ngOnInit() {
    
  }

}
