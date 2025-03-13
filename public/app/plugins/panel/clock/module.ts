import { PanelPlugin } from '@grafana/data';
import { ClockPanel } from './Clock';

export const plugin = new PanelPlugin(ClockPanel); 