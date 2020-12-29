import { Component, OnInit } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit {
  @Input() pro;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
