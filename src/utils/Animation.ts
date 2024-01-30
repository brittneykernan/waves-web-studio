import { gsap } from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';

gsap.registerPlugin(CustomEase);

// Slow In and Out with Steep curve in center, symetrical curve
export const SteepEase = CustomEase.create(
  'custom',
  'M0,0 C0.379,0 0.49,0.108 0.5,0.5 0.51,0.928 0.695,1 1,1'
);
