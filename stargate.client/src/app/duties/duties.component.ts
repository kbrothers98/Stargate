import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AstronautDutiesService } from '../api/services';
import { AstronautDuty } from '../api/models';
import { Location } from '@angular/common';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrl: './duties.component.css'
})
export class DutiesComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private _location: Location) { }

  @Input() displayBack = true;

  @Input() requerySubject: Observable<boolean> | null = null;

  requerySubjectSubscription: Subscription | null = null;

  dutiesService = inject(AstronautDutiesService);

  duties: AstronautDuty[] = [];

  backClicked() {
    this._location.back();
  }

  private query() {
    const personId = Number(this.route.snapshot.paramMap.get('personId'));
    if (!isNaN(personId)) {
      this.dutiesService.apiAstronautDutiesGetAstronautDutiesPersonIdGet$Json({ personId: personId }).subscribe((r) => {
        this.duties = r;
      });
    }
  }
  
  ngOnInit() {
    if (this.requerySubject) {
      this.requerySubjectSubscription = this.requerySubject?.subscribe((_) => {
        this.query();
      });
    }
    
    this.query();
  }

  ngOnDestroy() {
    this.requerySubjectSubscription?.unsubscribe();
  }

}
