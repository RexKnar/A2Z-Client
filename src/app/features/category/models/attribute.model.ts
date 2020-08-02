export interface AttributeModel {
  id: number;
  name: string;
  values: ValuesModel[];
}

interface ValuesModel {
  id: number;
  name: string;
}
