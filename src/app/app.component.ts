import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import {MatButtonModule} from '@angular/material/button';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, SharedModule, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UI';
}
