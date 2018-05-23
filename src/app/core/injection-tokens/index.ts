// Use this file to export all your injection tokens.
// Then they can be imported on other files like this. E.g.
// import { ApiUrl } from 'app/core/injection-tokens';
import { InjectionToken } from '@angular/core';

export const ApiUrl = new InjectionToken<string>('ApiUrl');
export const LogUrl = new InjectionToken<string>('LogUrl');
