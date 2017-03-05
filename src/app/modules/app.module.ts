import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents} from './router.module';
import { AppComponent } from '../appComponent/app.component';
import { PostsService } from '../services/reqpage.service';
import { Auth } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';

@NgModule({
  declarations: [
  	AppComponent,
  	routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PostsService, Auth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
