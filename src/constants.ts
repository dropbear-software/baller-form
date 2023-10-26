/* eslint-disable no-undef */

const SLIDE_OUT_BACK_LEFT: Keyframe[] = [
  { transform: "translateX(0)" },
  { transform: "translateX(-100vw)" },
];
const SLIDE_OUT_BACK_RIGHT: Keyframe[] = [
  { transform: "translateX(0)" },
  { transform: "translateX(100vw)" },
];
const FORWARD_ANIMATION_OPTS: KeyframeAnimationOptions = {
  duration: 500,
  easing: "ease-in-out",
  iterations: 1,
};
const REVERSE_ANIMATION_OPTS: KeyframeAnimationOptions = {
  ...FORWARD_ANIMATION_OPTS,
  direction: "reverse",
};

export type AnimationTuple = [Keyframe[], KeyframeAnimationOptions];

export const SLIDE_LEFT_OUT: AnimationTuple = [
  SLIDE_OUT_BACK_LEFT,
  FORWARD_ANIMATION_OPTS,
];
export const SLIDE_RIGHT_OUT: AnimationTuple = [
  SLIDE_OUT_BACK_RIGHT,
  FORWARD_ANIMATION_OPTS,
];
export const SLIDE_LEFT_IN: AnimationTuple = [
  SLIDE_OUT_BACK_LEFT,
  REVERSE_ANIMATION_OPTS,
];
export const SLIDE_RIGHT_IN: AnimationTuple = [
  SLIDE_OUT_BACK_RIGHT,
  REVERSE_ANIMATION_OPTS,
];