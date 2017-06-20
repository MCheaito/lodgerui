import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

//http://thecodeplayer.com/walkthrough/vertical-accordion-menu-using-jquery-css3 : accordion

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /*jQuery time*/
    $(document).ready(function(){
      $("#accordian h3").click(function(){
        //slide up all the link lists
        $("#accordian ul ul").slideUp();
        //slide down the link list below the h3 clicked - only if its closed
        if(!$(this).next().is(":visible"))
        {
          $(this).next().slideDown();
        }
      })
    });
  }

}
