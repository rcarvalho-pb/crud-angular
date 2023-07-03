import { Component } from '@angular/core';
import { cn } from './styles';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent {
  css = cn;

  public email?: string;
  public password?: string;

  public user?: Partial<User>;

  public login(event: MouseEvent) {
    console.log(this.email, this.password);
  }
}
