import { AbstractControl } from './controls/abstract-control';
import { ValidationErrors } from './validators';

export type ValidationOutput = Array<{
  control: AbstractControl;
  errors: ValidationErrors[];
}> | null;

export abstract class AbstractForm {
  abstract render(parent: HTMLBodyElement | HTMLDivElement): void;

  abstract reset(): void;

  abstract validate(): ValidationOutput;

  abstract toJSON<T>(): T;
}
