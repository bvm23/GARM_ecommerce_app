import { FormControl } from '@angular/forms';

export interface AuthFormControls {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}
