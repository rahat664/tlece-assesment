import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {ConvertNumberToPositionPipe} from "../../core/pipes/convert-number-to-position.pipe";
import demoData from '../../../assets/json/demo.json';
import {Router} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    DatePipe,
    ConvertNumberToPositionPipe,
    NgForOf,
    NgIf
  ],
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  toDay: Date = new Date();
  demoData = demoData;
  applicantShow = 5;
  showedApplications: any[];
  isMenuOpen: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.demoData.forEach((data: any) => {
      this.showedApplications = data.MatchedApplicants.slice(0, this.applicantShow);
    });
  }

  onClickSeeMore() {
    this.applicantShow += 5;
    console.log(this.applicantShow)
    this.demoData.forEach((data: any) => {
      if (this.applicantShow < data.MatchedApplicants.length) {
        this.applicantShow += 5;
        this.showedApplications = data.MatchedApplicants.slice(0, this.applicantShow);
      } else {
        this.applicantShow = data.MatchedApplicants.length;
        this.showedApplications = data.MatchedApplicants.slice(0, this.applicantShow);
      }
    });
  }

  onclickLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }
}
