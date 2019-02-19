import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Exercise } from '../exercise.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TrainingService } from '../training.service';

@Component({
    selector: 'app-past-training',
    templateUrl: './past-training.component.html',
    styleUrls: ['./past-training.component.scss']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource = new MatTableDataSource<Exercise>();
    displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];

    constructor(private trainingService: TrainingService) {
    }

    ngOnInit() {
        this.dataSource.data = this.trainingService.getCompletedOrCanceledExercises();
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    doFiler(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
