import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './components/wall/wall.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    WallComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSlideToggleModule,
  ]
})
export class ProfileModule { }
