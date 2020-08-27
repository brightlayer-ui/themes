import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { DemoModule } from '../demo.module';

describe('TitleComponent', () => {
    let component: TitleComponent;
    let fixture: ComponentFixture<TitleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [DemoModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
