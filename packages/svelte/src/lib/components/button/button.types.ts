import type { Snippet } from 'svelte';
import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';

type ButtonVariant = 'solid' | 'soft' | 'surface' | 'outlined' | 'ghost';
type ButtonColor = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'warning' | 'success';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BaseButtonProps {
	children: Snippet;
	size?: ButtonSize;
	color?: ButtonColor;
	variant?: ButtonVariant;
	pill?: boolean;
	disabled?: boolean;
	loading?: boolean;
	loadingText?: string;
	iconOnly?: boolean;
	class?: string;
}

interface ButtonAsHTMLButton
	extends
		BaseButtonProps,
		Omit<HTMLButtonAttributes, 'children' | 'class' | 'color' | 'size' | 'disabled'> {
	href?: never;
}

interface ButtonAsHTMLAnchor
	extends BaseButtonProps, Omit<HTMLAnchorAttributes, 'children' | 'class' | 'color' | 'size'> {
	href: string;
}

type ButtonProps = ButtonAsHTMLButton | ButtonAsHTMLAnchor;

export { type ButtonProps };
