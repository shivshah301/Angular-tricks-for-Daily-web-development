import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-generating-type-of-data-automatically',
  templateUrl: './generating-type-of-data-automatically.component.html',
  styleUrl: './generating-type-of-data-automatically.component.scss'
})
export class GeneratingTypeOfDataAutomaticallyComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }


  ngOnInit() {

    this.apiService.getListOfPokemonUrls().subscribe(x=> {
      console.log(x);
    })
  }


}
