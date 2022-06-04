export interface IModalComboBox {
  populateCombo(endpoint: string): void;
  writeValue(value: string): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState(isDisabled: boolean): void;
}
