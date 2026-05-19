import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../features/layout/header/header';
import { Aside }  from '../../features/layout/aside/aside';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,Header,Aside],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
