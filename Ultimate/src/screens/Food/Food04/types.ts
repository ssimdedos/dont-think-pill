import { JsonMap } from 'assets/icons';

export interface IFeature {
  icon: keyof JsonMap;
  title: string;
  onPress?(): void;
}
