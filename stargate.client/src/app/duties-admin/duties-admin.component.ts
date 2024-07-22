import { Component, inject } from '@angular/core';
import { AstronautDutiesService } from '../api/services';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-duties-admin',
  templateUrl: './duties-admin.component.html',
  styleUrl: './duties-admin.component.css'
})
export class DutiesAdminComponent {
  constructor(private route: ActivatedRoute, private _location: Location) { }

  dutiesService = inject(AstronautDutiesService);

  requerySubject: Subject<boolean> = new Subject();

  backClicked() {
    this._location.back();
  }

  rank: string = "";
  dutyTitle: string = "";
  startDate: Date | null = null;

  add() {
    if (this.rank == "" || this.dutyTitle == "" || this.startDate == null) {
      // ignoring this error for now
    }
    else {
      const personId = Number(this.route.snapshot.paramMap.get('personId'));

      this.dutiesService.apiAstronautDutiesPost$Json({
        body: {
          rank: this.rank,
          dutyTitle: this.dutyTitle,
          dutyStartDate: this.startDate.toISOString(),
          personId: personId
        }
      }).subscribe(_ => {
        this.requerySubject.next(true);
        this.rank = "";
        this.dutyTitle = "";
        this.startDate = null;
      });
    }

  }
}
