# Style Guide

This styleguide aims to make an standard for the projects built within BofI, following some of the Angular Style Guide conventions with some adjustments.

# Style vocabulary

The wording in every guideline indicates how strong a recommendation is.

* **Do** guidelines are those that should always be followed, and represents a good practice. There shouldn't be a case in which you may break a **Do** guideline.
* **Consider** guidelines are those that should be generally followed, but there could be the case in which you have a good reason not to, and then you can do so, but stay consistent.
* **Avoid** guidelines indicate something you shouldn't be doing. Generally presented with a code example.
* **Why?** gives reasons for following the recommendations.

**Note:** When presenting code examples in this styleguide, they should be presented as follows:

> filename

```typescript
export class Example {}
```

# File structure

* **Do** use the following file name format: `file-name.role.extension`.
  Where roles can be: `module | component | directive | pipe | guard | service | model | catalog | action | reducer | effect | selector`.
* For spec files, **do** use the following format: `file-name.role.spec.ts`
* **Do** use a folder per module.
* **Do** separate different parts of a module in folders, such as `components`, `directives`, `services`, `pipes`, etc.
* **Do** use plural names for folders that contain parts of your module.
* **Consider** using an `index.ts` file inside the folders that exports all your _importable_ files.

* **Avoid** using abbreviations such as `.srvc`, `.svc`. They can be confusing.
* **Why?** Using an `index.ts` file can make importing easier and better by importing multiple items from a single folder. E.g.

> another.component.ts

```typescript
import { HelloWorldComponent, OtherComponent } from 'app/components';
```

> Application folder structure

```
| app/
  | app.module.ts
  | components/
    | index.ts
    | hello-world/
      | hello-world.component.html
      | hello-world.component.ts
      | hello-world.component.scss
      | hello-world.component.spec.ts
  | directives/
    | index.ts
    | autocomplete/
      | autocomplete.directive.ts
      | autocomplete.directive.spec.ts
  | pipes/
    | index.ts
    | phone-number/
      | phone-number.pipe.ts
      | phone-number.pipe.spec.ts
  | models/
    | index.ts
    | phone-number.model.ts
```

> app/components/index.ts

```typescript
export * from './hello-world/hello-world.component';
```

# Single responsibility

* **Do** define one thing, per file. This can be a component, service, etc. Models are defined in a separate section.
* **Why?** having a single component per file makes reading easier, and helps to avoid merge conflicts.

> app/account.component.ts

```typescript
// Avoid
import { Component } from '@angular/core';

@Component({ ... })
export class AccountComponent {}

export interface Account {
  number?: string;
  type?: string;
}
```

# Naming

## General naming guidelines

* **Do** use consistent names for all symbols.
* **Do** follow a pattern that describes symbol's feature and its type. Recommended is `feature.type.ts`.
* **Why?** These file names make it easy for the developer to know both the feature and the type of a certain piece of the application by maintaining consistency across the whole project.
* **Why** Naming conventions should simplify the process of searching code.

## Separate file names with dots and dashes

* **Do** use only lowercase letters for the file and folder names.
* **Do** use dashes to separate words in the descriptive name (kebab-case).
* **Do** use consistent type names for the files. See [General naming guidelines](#general-naming-guidelines).
* **Do** use conventional type names including `.service`, `.component`, `.directive`, `.pipe`, `.module`, `.guard`, `.token`, `.model`, `.util`. Invent additional type names but be careful not to create too many.
* **Why?** Type names provide a consistent way to quickly identify what is in the file.
* **Why?** Type names make it easy for your editor/IDE to search.
* **Why?** Type names provide pattern matching for any automated tasks. Such as the `test` task.
* **Avoid** using abbreviations such as `.svc`, `.srvc`. Abbreviations can cause confusion.

## Symbol and file names

* **Do** use consistent names for all assets named after what they represent, excluding models.
* **Do** use `PascalCase` for class, interface and type names.
* **Do** match the name of the symbol to the name of the file.
* **Do** append the symbol name with the conventional suffix (`Component`, `Directive`, `Pipe`, `Guard`, `Service`, etc) excluding models.
* **Do** match the suffix of the symbol name with the type of the file name.
* **Why?** Consisten naming conventions make it easy to quickly identify and reference assets of different types.

> app.component.ts

```typescript
@Component({...})
export class AppComponent {}
```

> account.component.ts

```typescript
@Component({...})
export class AccountComponent{}
```

> credit-card.directive.ts

```typescript
@Directive({...})
export class CreditCardDirective {}
```

> uppercase.pipe.ts

```typescript
@Pipe({...})
export class UppercasePipe implements PipeTransform {}
```

> authentication.service.ts

```typescript
@Injectable()
export class AuthenticationService extends BaseService {}
```

> user-profile.module.ts

```typescript
@NgModule({...})
export class UserProfileModule {}
```

## Directive selectors

* **Do** use `camelcase` for naming the selectors of directives.
* **Do** spell non-element selectors in `camelCase`.
* **Why?** Keeps the name sof the properties defined in the directives consistent with attribute names.
* **Why?** Angular HTML parser is case sensitive and recognises `camelCase`.

> credit-card.directive.ts

```typescript
// Avoid
@Directive({
  selector: 'creditCard',
})
export class CreditCardDirective {}

// Do
@Directive({
  selector: '[creditCard]',
})
export class CreditCardDirective {}
```

## Component selectors

* **Do** use `kebab-case` for selector names.
* **Do** use a custom prefix for a component selector. For example, prefix `olb` could represent a component inside the `olb` application whether `uikit` prefix represents a UI Kit component.
* **Do** use a prefix that identifies the feature area or the app itself.
* **Why?** Prevents element collisions with native HTML elements.
* **Why?** Makes it easier to share components with other apps.
* **Why?** Components are easy to identify in the DOM.

> account.component.ts

```typescript
// Avoid
@Component({
  selector: 'account',
})
export class AccountComponent {}

// Do
@Component({
  selector: 'olb-account',
})
export class AccountComponent {}
```

**Note:** The prefix doesn't go into the symbol name itself. This is because every single component should be inside a folder structure that makes it easy to know where you are importing the component. And in case of naming collision you can use an alias when importing. E.g.

> home.module.ts

```typescript
import { DashboardComponent as UiKitDashboadComponent } from '@uikit/components';
import { DashboardComponent } from './dashboard/dashboard.component';
```

## Pipe names

* **Do** use consistent names for all pipes, named after their feature.
* **Why?** Provides a consistent way to quickly identify and reference pipes.

> uppercase.pipe.ts

```typescript
@Pipe({
  name: 'uppercase',
})
export class UppercasePipe implements PipeTransform {}
```

## Unit test file names

* **Do** name test specification files the same as the component they test.
* **Do** name test specification files with the `.spec` suffix.
* **Why?** Provides a consistent way to quickly identify tests.
* **Why?** This seed project uses this pattern matching for karma test runner.

**Components**

* > account.component.spec.ts
* > datepicker.component.spec.ts

**Services**

* > authentication.service.spec.ts
* > accounts.service.spec.ts

**Pipes**

* > uppercase.pipe.spec.ts

And so on.

# Typings

Have a consisten way of use the different TypeScript keywords to create your types.

## Class

* **Do** use class if you need an instance of an object at runtime.
* **Why?** It is better to simply create an object by using the `new` keyword than delcaring it with `{}`.

> transaction.model.ts

```typescript
export class Transaction {
  constructor(
    public accountNumberFrom: string,
    public accountTypeFrom: string,
    public accountNumberTo: string,
    public accountTypeTo: string,
    public amount
  ) {}

  isAmountValid(): boolean {
    return this.amount > 0;
  }
}
```

## Interface

* **Do** use an interface if you just need type checking. This is pretty useful with data services.
* **Why?** Interfaces are used by the TypeScript compiler and do not get transpiled, therefore the bundle size is lower.

## Type

* **Do** use type only for model variations, such as a name for an array of records (example above).
* **Why?** It's less code to just assign a type to a variation of a model than creating another one by extending the original.

> page-record.model.ts

```typescript
export interface PageRecord {
  id: number;
  value: string;
}

export type TablePage = PageRecord[];
```

## Typing extensions

* **Do** take advantage of inheritance with your types.
* **Why?** It avoids code duplication.

> user.model.ts

```typescript
export interface User {
  username: string;
  password: string;
}
```

> admin-user.model.ts

```typescript
import { User } from './user.model';

export interface AdminUser extends User {
  roles: string[];
}
```

# Coding conventions

Have a consistent set of coding, naming, and whitespace conventions.

## Classes

* **Do** use `PascalCase` when naming classes.
* **Why?** Follows a conventional thinking for class names.
* **Why?** `Pascalcase` indicates a constructable asset.

> test.service.ts

```typescript
// Avoid
export class testService {}

// Do
export class TestService {}
```

## Constants

* **Do** declare variables with `const` if their values should not change during application lifetime.
* **Why?** Conveys to readers that the value is immutable.
* **Why?** TypeScript will help preventing reassignation of the constant and will throw an error if you try to.
* **Consider** spelling `const` in `camelCase`.
* **Why?** `camelCase` names are easier to read and understand than the traditional `SNAKE_CASE` names.
* **Do** tolerate existing `const` variables spelled in `SNAKE_CASE`.
* **Why?** Many libraries still use this convention as it seems to remain popular.

> app/core/settings.constants.ts

```typescript
export const pageSize: number = 10; // Prefer
export const NAV_MENU: string[] = ['home', 'dashboard']; // Tolerate
```

## Models

* **Do** name a model in `PascalCase`.
* **Do** not name an interface with the `I` prefix.
* **Do** type all your model properties.
* **Consider** indicate if a property of the model is optional.
* **Consider** exporting a model variation if it is not adding any other properties to the original model (example below.)
* **Why?** [TypeScript guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines) discourage the `I` prefix.
* **Why?** A class alone is less code than a `class-plus-interface`.

> user.model.ts

```typescript
// Avoid
export interface IUser {
  username: string;
  password: string;
}

// Do
export interface User {
  username: string;
  password: string;
}
```

> model-variation.model.ts

```typescript
export interface PageRecord {
  id: numbber;
  value: string;
}

export type TablePage = PageRecord[];
```

## Properties and methods

* **Do** use `camelCase` to name properties and methods.
* **Avoid** prefixing private properties and methods with an underscore.
* **Why?** Follows conventional thinking for properties and methods.
* **Why?** JavaScript doesn't have a true private property or method.
* **Why?** TypeScript tooling makes it easy to identify private vs. public properties and methods.
* **Consider** not using the `public` keyword when declaring properties and methods.
* **Why?** By default properties and methods are public.
* **Consider** order your class properties as:
  * static properties
  * public properties
  * protected properties
  * private properties
  * static methods
  * constructor
  * Lifecycle hooks (ngOnInit, ngOnChanges)
  * public methods
  * protected methods
  * private methods
* **Why?** It makes it easy to read and know where and what properties can be accessed from where.
* **Why?** Makes it easy to know where are the methods. Also, putting the lifecycle hooks just after the constuctor gives you visibility about how the component will behave during its lifecycle.

> authentication.service.ts

```typescript
// Avoid
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from 'app/core/services';
import { User, ApiResponse, AuthenticationResponse } from 'app/core/models';

@Injectable()
export class AuthenticationService extends BaseService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    super('authentication');
    this.http = http;
  }

  signIn(credentials: User): ApiResponse<AuthenticationResponse> {
    return this.http.post('signin', { credentials });
  }

  private _errorHandler(): void {
    // Implementation
  }
}

// Do
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from 'app/core/services';
import { User, ApiResponse, AuthenticationResponse } from 'app/core/models';

@Injectable()
export class AuthenticationService extends BaseService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    super('authentication');
    this.http = http;
  }

  signIn(credentials: User): ApiResponse<AuthenticationResponse> {
    return this.http.post('signin', { credentials });
  }

  private errorHandler(): void {
    // Implementation
  }
}
```

## Spacing

* **Do** separate properties and methods with a line break between their access level. E.g. a line break between public and private properties.
* **Do** separate vendor imports from application imports with a line break.
* **Do** add a line break before and after the constructor.
* **Do** add a line break before and after every method.
* **Why?** Separating imports helps to quickly identify application's dependencies and vendor dependencies.
* **Why?** separating properties groups with a line break helps to quickly identify their access level.

> account.component.ts

```typescript
import { Component } from '@angular/core';

import { Account } from 'app/core/models';

@Component({...})
export class AccountComponent {
  status: string;
  nickname: string;

  private isClosed: boolean;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {}

  ngOnDestroy() {}

  private calculateRemainingBalance(): void {}
}
```

# Application structure and NgModules
All of the app's code should go inside the `src` folder. All feature modules or other application modules should be inside their own folder.

Each service, component, pipe, etc should be in its own file and be inside one module folder.

## Shared Module
- **Do** include all app-wide reusable pieces that need an instance per module, such as components, pipes, directives, etc inside the `SharedModule`.
- **Do** import the `SharedModule` in the modules that need shared components, pipes, etc.
- **Why?** Having the common components in one place makes it easy to reuse them in all parts of the application.


## Core Module
- **Do** include all the app-wide singletons such as `services`, `guards` and `injection-tokens` inside the `CoreModule`.
- **Do** import the `CoreModule` **only once** in your application's entry point module.
- **Why?** Having all the singletons in one single module makes importing them very easy.
- **Why?** Importing the `CoreModule` only once, makes all your singletons available in all parts of the application and prevents issues when lazy loading.

**Note:** When you lazy-load your code, the module creates new instances of all the providers it has in its `NgModule` definition, so be careful no to import application-wide singletons insde a lazy-loaded module.
