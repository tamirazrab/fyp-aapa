import { NestedKeyOf } from './nested-keyof';

export interface KendoGridColumnSettings<T extends object> {
  field: NestedKeyOf<T>;
  title?: string;
  /** @see [Kendo Grid - Filter Data Types](https://www.telerik.com/kendo-angular-ui/components/grid/filtering/basics/#toc-filter-data-types) */
  filter?: 'text' | 'numeric' | 'boolean' | 'date';
  /**
   * Set to true if the field is nullable.  Sorting will not work if not set correctly.
   **/
  nullable?: boolean;
  format?: string;
  width?: number;
  _width?: number;
  filterable?: boolean;
  sortable?: boolean;
  orderIndex?: number;
  hidden?: boolean;
  autoSize?: boolean;

  /** Custom <zen-grid> column settings */
  custom?: {
    /** @comment set this to true when fields are nullable on the Prisma model */
    nullable?: boolean;
    currency?: boolean | 'cents';
    preformatted?: boolean;
    html?: boolean;
    display?: NestedKeyOf<T> | ((item: T) => any);
  };
}
