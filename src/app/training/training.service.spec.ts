import {TestBed} from '@angular/core/testing';

import {TrainingService} from './training.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('TrainingService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule]
    }));

    it('should be created', () => {
        const service: TrainingService = TestBed.get(TrainingService);
        expect(service).toBeTruthy();
    });
});
