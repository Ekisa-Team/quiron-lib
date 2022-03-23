import { FormControlType } from '../enums/form-control-type.enum';
import { BaseControl } from './base-control';

export class TextArea extends BaseControl<string> {
  override type = FormControlType.TextArea;
}
