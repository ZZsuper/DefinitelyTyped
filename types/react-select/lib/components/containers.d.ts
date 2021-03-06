import { Component, ReactNode as Node, ComponentType } from 'react';
import { spacing } from '../theme';
import { CommonProps, KeyboardEventHandler } from '../types';

// ==============================
// Root Container
// ==============================

export interface ContainerState {
  /** Whether the select is disabled. */
  isDisabled: boolean;
  /** Whether the text in the select is indented from right to left. */
  isRtl: boolean;
}

export type ContainerProps<OptionType> = CommonProps<OptionType> &
  ContainerState & {
    /** The children to be rendered. */
    children: Node,
    /** Inner props to be passed down to the container. */
    innerProps: { onKeyDown: KeyboardEventHandler },
  };
export function containerCSS(state: ContainerState): any; // TODO css type;
export const SelectContainer: ComponentType<ContainerProps<any>>;

// ==============================
// Value Container
// ==============================

export type ValueContainerProps<OptionType> = CommonProps<OptionType> & {
  /** Set when the value container should hold multiple values */
  isMulti: boolean,
  /** Whether the value container currently holds a value. */
  hasValue: boolean,
  /** The children to be rendered. */
  children: Node,
};
export function valueContainerCSS(): any; // TODO css type;
export class ValueContainer extends Component<ValueContainerProps<any>> {}

// ==============================
// Indicator Container
// ==============================

export interface IndicatorsState {
  /** Whether the text should be rendered right to left. */
  isRtl: boolean;
}

export type IndicatorContainerProps<OptionType> = CommonProps<OptionType> &
  IndicatorsState & {
    /** The children to be rendered. */
    children: Node,
  };

export function indicatorsContainerCSS(): any; // TODO css type;
export const IndicatorsContainer: ComponentType<IndicatorContainerProps<any>>;
