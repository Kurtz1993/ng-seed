// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// Declare any file or folder that should be excluded from the code coverage report here.
// Paths are relative to the app folder.
const excludedFromCodeCoverage = ['utilities/test', 'core/services/base.service', '/index.ts'];

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// Add all the files to the context. This is for code coverage purposes.
const componentsContext = require.context('./app', true, /\.ts$/);
componentsContext
  .keys()
  .filter((key: string) => !excludedFromCodeCoverage.some(path => key.includes(path)))
  .forEach(componentsContext);
