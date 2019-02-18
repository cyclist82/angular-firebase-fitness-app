import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "app-stop-training",
    template: `
        <h1 mat-dialog-title>Bist du sicher?</h1>
        <mat-dialog-content>
            <p>Du hast bereits {{ data.progress }}% geschafft.</p>
        </mat-dialog-content>
        <mat-dialog-actions>
            <button mat-raised-button [mat-dialog-close]="true">Ja</button>
            <button mat-raised-button [mat-dialog-close]="false">Nein</button>
        </mat-dialog-actions>
    `
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }
}
