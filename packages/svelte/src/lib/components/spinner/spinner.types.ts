import type { HTMLBaseAttributes } from 'svelte/elements';

type SpinnerVariant = 'default' | 'simple' | 'track';
type SpinnerColor = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success';
type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface BaseSpinnerProps {
	size?: SpinnerSize;
	color?: SpinnerColor;
	variant?: SpinnerVariant;
	speed?: number; // seconds
	thickness?: number; // em
	class?: string;
}

type SpinnerProps = BaseSpinnerProps &
	Omit<HTMLBaseAttributes, 'children' | 'class' | 'color' | 'size' | 'disabled'>;

export { type SpinnerProps };
