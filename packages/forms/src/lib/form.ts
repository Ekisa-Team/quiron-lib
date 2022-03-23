import { AbstractForm } from './abstract-form';
import renderUtils from './renderer';
import { FormControls } from './types/form-control.type';
import { FormPersistenceEvent, FormPersistenceType } from './types/form-persistence.type';

export class Form extends AbstractForm {
  /** List of dynamically configured form controls */
  dataSource!: FormControls;

  /** Customizable options to style the form */
  theme!: any;

  formColumns!: number;

  /** Control status  */
  _isReadonly!: boolean;

  get isReadonly() {
    return this._isReadonly;
  }

  set isReadonly(status: boolean) {
    this._isReadonly = status;
  }

  /** Control status  */
  _isDisabled!: boolean;

  get isDisabled() {
    return this._isDisabled;
  }

  set isDisabled(status: boolean) {
    this._isDisabled = status;
  }

  _form!: HTMLFormElement;

  constructor(args: {
    dataSource: FormControls;
    theme?: any;
    columns?: number;
    readonly?: boolean;
    disabled?: boolean;
  }) {
    super();

    this.dataSource = args.dataSource;
    this.theme = args.theme;
    this.formColumns = args.columns ?? 1;
    this.isReadonly = args.readonly ?? false;
    this.isDisabled = args.disabled ?? false;
  }

  override render(parent: HTMLBodyElement | HTMLDivElement): void {
    const form = renderUtils.renderForm(this.dataSource);
    parent.append(form);
    this._form = form;
  }

  override reset(): void {
    throw new Error('Method not implemented.');
  }

  override validate(): boolean {
    throw new Error('Method not implemented.');
  }

  override persist(args: { in: FormPersistenceType; when: FormPersistenceEvent }): boolean {
    throw new Error('Method not implemented.');
  }

  override toJSON<T>(): T {
    const formData = new FormData(this._form);
    const formProps = Object.fromEntries(formData);
    return formProps as Record<string, unknown> as T;
  }
}
