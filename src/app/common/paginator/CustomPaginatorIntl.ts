import { MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";

export class CustomPaginatorIntl implements MatPaginatorIntl {
    changes = new Subject<void>();
    itemsPerPageLabel = 'Items por página';
    nextPageLabel = 'Siguiente';
    previousPageLabel = 'Anterior';
    firstPageLabel = 'Primera página';
    lastPageLabel = 'Última página';
    getRangeLabel(page: number, pageSize: number, length: number): string {
        if (length === 0) {
            return $localize`Página 1 de 1`;
          }
          const amountPages = Math.ceil(length / pageSize);
          return $localize`Página ${page + 1} de ${amountPages}`;
        }
}
