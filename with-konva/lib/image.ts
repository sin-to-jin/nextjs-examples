// eslint-disable-next-line no-unused-vars
import { isWindow } from './globalUtil';

declare global {
  interface Window {
    createObjectURL: any;
  }
}
if (isWindow) window.createObjectURL = window.createObjectURL || {};
export const createObjectURL = (file: File) => {
  if (!isWindow) return '';
  return (window.URL || window.webkitURL).createObjectURL(file) || window.createObjectURL(file);
};
