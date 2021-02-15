/* eslint-disable @typescript-eslint/no-unused-vars */

import { TestBed, async } from '@angular/core/testing';
  import { RouterTestingModule } from '@angular/router/testing';
  import { AppComponent } from './app.component';

  describe('AppComponent', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          AppComponent
        ],
      });
      TestBed.compileComponents();
    });

    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));

    it(`should have as title 'Brand Marketing Code Test'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('Brand Marketing Code Test');
    });
  });
