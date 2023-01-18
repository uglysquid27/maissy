import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-am-m-fsb',
  templateUrl: './am-m-fsb.component.html',
  styleUrls: ['./am-m-fsb.component.css']
})
export class AmMFsbComponent implements OnInit {
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  itemsPerPage2: number = 0;
  currentPage2: number = 1;
  absoluteIndex2(indexOnPage: number): number {
    return this.itemsPerPage2 * (this.currentPage2 - 1) + indexOnPage;
  }
  public resolved: boolean = false;
  totalfm: object = {};
  searchText: any;
  searchText2: any;
  totalfm2: any = [];
  findingpending: object = {};
  findingpending2: any = [];
  orderobj: object = {};
  orderarr: any = [];
  totallevel: object = {};
  totallevel2: any = [];
  ftotallevel: any = [];
  low: number = 0;
  medium: number = 0;
  high: number = 0;
  januari: number = 0;
  febuari: number = 0;
  maret: number = 0;
  april: number = 0;
  mei: number = 0;
  juni: number = 0;
  juli: number = 0;
  agustus: number = 0;
  september: number = 0;
  oktober: number = 0;
  november: number = 0;
  desember: number = 0;
  januariclose: number = 0;
  febuariclose: number = 0;
  maretclose: number = 0;
  aprilclose: number = 0;
  meiclose: number = 0;
  juniclose: number = 0;
  juliclose: number = 0;
  agustusclose: number = 0;
  septemberclose: number = 0;
  oktoberclose: number = 0;
  novemberclose: number = 0;
  desemberclose: number = 0;
  totaldata1year: any = [];
  totalfindingmonitorbar: any = [];
  totalfindingmonitordonut: any = [];
  totalpm: object = {};
  totalpm2: any = [];
  totalrm: object = {};
  totalrm2: any = [];
  totalffm: object = {};
  totalffm2: any = [];
  coba: any = [];
  donut: any = [];
  totalfinding1: any;
  totalfinding2: any;
  totalfinding3: any;
  public loaddata: any;
  totalfinding4: any;
  funloc: any;
  funloclist: any = [];
  deskripsi: any = 'Loading..';
  pendingexecute: number = 0;
  finishexecute: number = 0;
  readyexecute: number = 0;
  @ViewChild("target")
  target!: ElementRef;
  data($event: any) {
    this.target.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    this.funloclist = [];
    this.funloc = $event;
    // console.log(this.funloc);
    for (let i = 0; i < this.orderarr.length; i++) {
      if (this.orderarr[i].func_loc === this.funloc) {
        this.funloclist[i] = this.orderarr[i];
      }
    }
    this.funloclist = this.funloclist.filter(function (e: any) { return e != null; });
    // console.log(this.funloclist);
  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getAmTotalData1Year().subscribe(data => {
        this.totaldata1year.push(data);
        for (let elem of this.totaldata1year[0].get) {
          if (elem.bulan == 'January') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.januariclose += 1
              } else {
                this.januari += 1;
              }
            }
          } else if (elem.bulan == 'February') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.febuariclose += 1
              } else {
                this.febuari += 1;
              }
            }
          } else if (elem.bulan == 'March') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.maretclose += 1;
              } else {
                this.maret += 1;
              }
            }
          } else if (elem.bulan == 'April') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.aprilclose += 1;
              }
              else {
                this.april += 1;
              }
            }
          } else if (elem.bulan == 'May') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.meiclose += 1;
              } else {
                this.mei += 1;
              }
            }
          } else if (elem.bulan == 'June') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.juniclose += 1;
              } else {
                this.juni += 1;
              }
            }
          } else if (elem.bulan == 'July') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.juliclose += 1;
              } else {
                this.juli += 1;
              }
            }
          } else if (elem.bulan == 'August') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.agustusclose += 1;
              } else {
                this.agustus += 1;
              }
            }
          } else if (elem.bulan == 'September') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.septemberclose += 1;
              } else {
                this.september += 1;
              }
            }
          } else if (elem.bulan == 'October') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.oktoberclose += 1;
              } else {
                this.oktober += 1;
              }
            }
          } else if (elem.bulan == 'November') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.novemberclose += 1;
              } else {
                this.november += 1;
              }
            }
          } else if (elem.bulan == 'December') {
            if (elem.id_area == 3) {
              if (elem.teco_date != null) {
                this.desemberclose += 1;
              } else {
                this.desember += 1;
              }
            }
          }
        }
        new Chart("valuepermonthchart", {
          type: "bar",
          data: {
            labels: ["January", "February", "Maret", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
              {
                "label": "Total",
                "data": [Math.round(this.januari), Math.round(this.febuari), Math.round(this.maret), Math.round(this.april), Math.round(this.mei), Math.round(this.juni), Math.round(this.juli), Math.round(this.agustus), Math.round(this.september), Math.round(this.oktober), Math.round(this.november), Math.round(this.desember)],
                "backgroundColor": "#34568B"
              },
              {
                "label": "Close",
                "data": [Math.round(this.januariclose), Math.round(this.febuariclose), Math.round(this.maretclose), Math.round(this.aprilclose), Math.round(this.meiclose), Math.round(this.juniclose), Math.round(this.juliclose), Math.round(this.agustusclose), Math.round(this.septemberclose), Math.round(this.oktoberclose), Math.round(this.novemberclose), Math.round(this.desemberclose)],
                "backgroundColor": "#FF6F61"
              },
            ]

          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });
      });
      this.service.getOrder().subscribe(data => {
        this.orderobj = data;
        Object.values(this.orderobj).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.orderarr.splice(this.orderarr.lenght, 0, array[i]);
          }
          // console.log(this.orderarr);

          // // console.log(this.findingpending2);
        })


      }
      );
      this.service.getReadLevelTotalfsb().subscribe(data => {
        this.totallevel = data;
        Object.values(this.totallevel).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totallevel2.splice(this.totallevel2.lenght, 0, array[i]);
          }
          for (var i = 0; i < this.totallevel2.length; i++) {
            if (this.totallevel2[i].level === 'Low') {
              this.low += 1;
            }
            if (this.totallevel2[i].level === 'Medium') {
              this.medium += 1;
            }
            if (this.totallevel2[i].level === 'High') {
              this.high += 1;
            }
          }
          new Chart('donut2', {
            type: 'doughnut',
            data: {
              labels: ['Low', 'Medium', 'High'],
              datasets: [{
                label: '# of Votes',
                data: [this.low, this.medium, this.high],
                backgroundColor: [
                  '#626d71',
                  '#ffc13b',
                  '#ff6e40',
                ],
                borderColor: [
                  'white',
                  'white',
                  'white',
                ],
                borderWidth: 1
              }]
            },
          });
          // // console.log(this.medium);
          // // console.log(this.totallevel2);
        })


      }
      );
      this.service.getReadFindingPendingfsb().subscribe(data => {
        this.findingpending = data;
        Object.values(this.findingpending).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.findingpending2.splice(this.findingpending2.lenght, 0, array[i]);
          }

          // // console.log(this.findingpending2);
        })


      }
      );
      this.service.getTotalFindingMfsb().subscribe(data => {
        this.totalfm = data;
        Object.values(this.totalfm).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.totalfm2.splice(this.totalfm2.lenght, 0, array[i]);
          }
          // console.log(this.totalfm2);

          for (let elem of this.totalfm2) {
            if (elem.status == 'Done') {
              this.finishexecute += 1;
            }
            else if (elem.status == 'Draft' || elem.status == 'Submit' || elem.status == 'Revise') {
              this.pendingexecute += 1;
            }
            else if (elem.status == 'Approved') {
              this.readyexecute += 1;
            }
          }
          // // console.log(this.const2);
          new Chart('dum', {
            type: 'bar',
            data: {
              datasets: [
                {
                  label: 'Total Finding',
                  data: [this.totalfm2.length],
                  backgroundColor: [
                    '#ddbc95',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
                {
                  type: 'bar',
                  label: 'Pending Execute',
                  data: [this.pendingexecute],
                  backgroundColor: [
                    '#ff6e40',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Ready Execute',
                  data: [this.readyexecute],
                  backgroundColor: [
                    '#ffc13b',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Finish Execute',
                  data: [this.finishexecute],
                  backgroundColor: [
                    '#1e3d59',
                  ],
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },

              ]
            }, options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
          new Chart('donut', {
            type: 'doughnut',
            data: {
              labels: ['Pending execute', 'Ready execute', 'Finish execute'],
              datasets: [{
                label: '# of Votes',
                data: [this.pendingexecute, this.readyexecute, this.finishexecute],
                backgroundColor: [
                  '#ff6e40',
                  '#ffc13b',
                  '#1e3d59',
                ],
                borderColor: [
                  'white',
                  'white',
                  'white',
                  'white',
                ],
                borderWidth: 1
              }]
            },
          });
          this.spinner.hide();
          this.resolved = true;
          // // console.log(this.const2.splice(this.const2.lenght,0,array[0]).total);
        })
      })


    }
    );
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};

