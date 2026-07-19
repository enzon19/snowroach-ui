import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
	base: 'box-border inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-center font-medium transition-all focus-visible:outline-3 focus-visible:outline-offset-2 enabled:active:scale-[0.97] enabled:active:brightness-90 motion-reduce:transition-none',
	variants: {
		size: {
			xs: 'h-8 px-3 text-xs',
			sm: 'h-9 px-3.5 text-sm',
			md: 'h-10 px-4 text-sm',
			lg: 'h-12 px-4 text-base',
			xl: 'h-14 px-5 text-lg',
			'2xl': 'h-16 px-6 text-xl'
		},
		color: {
			primary: '',
			secondary: '',
			tertiary: '',
			danger: '',
			warning: '',
			success: ''
		},
		variant: {
			solid: 'enabled:active:brightness-95',
			soft: '',
			surface: 'border',
			outlined: 'border bg-transparent',
			ghost: 'bg-transparent'
		},
		pill: {
			true: 'rounded-full'
		},
		iconOnly: {
			true: 'aspect-square px-0',
			false: ''
		},
		disabled: {
			true: 'cursor-not-allowed opacity-50'
		}
	},
	compoundVariants: [
		// Primary
		{
			variant: 'solid',
			color: 'primary',
			class:
				'bg-primary text-on-primary focus-visible:outline-primary enabled:hover:bg-primary-hover'
		},
		{
			variant: 'soft',
			color: 'primary',
			class:
				'bg-primary-soft text-on-primary-soft focus-visible:outline-on-primary-soft enabled:hover:bg-primary-soft-hover'
		},
		{
			variant: 'surface',
			color: 'primary',
			class:
				'border-primary/50 bg-primary-soft text-on-primary-soft focus-visible:outline-on-primary-soft enabled:hover:bg-primary-soft-hover'
		},
		{
			variant: 'outlined',
			color: 'primary',
			class:
				'border-primary/50 text-on-primary-soft focus-visible:outline-on-primary-soft enabled:hover:bg-primary-soft'
		},
		{
			variant: 'ghost',
			color: 'primary',
			class:
				'text-on-primary-soft focus-visible:outline-on-primary-soft enabled:hover:bg-primary-soft'
		},
		// Secondary
		{
			variant: 'solid',
			color: 'secondary',
			class:
				'bg-secondary text-on-secondary focus-visible:outline-secondary enabled:hover:bg-secondary-hover'
		},
		{
			variant: 'soft',
			color: 'secondary',
			class:
				'bg-secondary-soft text-on-secondary-soft focus-visible:outline-on-secondary-soft enabled:hover:bg-secondary-soft-hover'
		},
		{
			variant: 'surface',
			color: 'secondary',
			class:
				'border-secondary/50 bg-secondary-soft text-on-secondary-soft focus-visible:outline-on-secondary-soft enabled:hover:bg-secondary-soft-hover'
		},
		{
			variant: 'outlined',
			color: 'secondary',
			class:
				'border-secondary/50 text-on-secondary-soft focus-visible:outline-on-secondary-soft enabled:hover:bg-secondary-soft'
		},
		{
			variant: 'ghost',
			color: 'secondary',
			class:
				'text-on-secondary-soft focus-visible:outline-on-secondary-soft enabled:hover:bg-secondary-soft'
		},
		// Tertiary
		{
			variant: 'solid',
			color: 'tertiary',
			class:
				'bg-tertiary text-on-tertiary focus-visible:outline-tertiary enabled:hover:bg-tertiary-hover'
		},
		{
			variant: 'soft',
			color: 'tertiary',
			class:
				'bg-tertiary-soft text-on-tertiary-soft focus-visible:outline-on-tertiary-soft enabled:hover:bg-tertiary-soft-hover'
		},
		{
			variant: 'surface',
			color: 'tertiary',
			class:
				'border-tertiary/50 bg-tertiary-soft text-on-tertiary-soft focus-visible:outline-on-tertiary-soft enabled:hover:bg-tertiary-soft-hover'
		},
		{
			variant: 'outlined',
			color: 'tertiary',
			class:
				'border-tertiary/50 text-on-tertiary-soft focus-visible:outline-on-tertiary-soft enabled:hover:bg-tertiary-soft'
		},
		{
			variant: 'ghost',
			color: 'tertiary',
			class:
				'text-on-tertiary-soft focus-visible:outline-on-tertiary-soft enabled:hover:bg-tertiary-soft'
		},
		// Danger
		{
			variant: 'solid',
			color: 'danger',
			class: 'bg-danger text-on-danger focus-visible:outline-danger enabled:hover:bg-danger-hover'
		},
		{
			variant: 'soft',
			color: 'danger',
			class:
				'bg-danger-soft text-on-danger-soft focus-visible:outline-on-danger-soft enabled:hover:bg-danger-soft-hover'
		},
		{
			variant: 'surface',
			color: 'danger',
			class:
				'border-danger/50 bg-danger-soft text-on-danger-soft focus-visible:outline-on-danger-soft enabled:hover:bg-danger-soft-hover'
		},
		{
			variant: 'outlined',
			color: 'danger',
			class:
				'border-danger/50 text-on-danger-soft focus-visible:outline-on-danger-soft enabled:hover:bg-danger-soft'
		},
		{
			variant: 'ghost',
			color: 'danger',
			class: 'text-on-danger-soft focus-visible:outline-on-danger-soft enabled:hover:bg-danger-soft'
		},
		// Warning
		{
			variant: 'solid',
			color: 'warning',
			class:
				'bg-warning text-on-warning focus-visible:outline-warning enabled:hover:bg-warning-hover'
		},
		{
			variant: 'soft',
			color: 'warning',
			class:
				'bg-warning-soft text-on-warning-soft focus-visible:outline-on-warning-soft enabled:hover:bg-warning-soft-hover'
		},
		{
			variant: 'surface',
			color: 'warning',
			class:
				'border-warning/50 bg-warning-soft text-on-warning-soft focus-visible:outline-on-warning-soft enabled:hover:bg-warning-soft-hover'
		},
		{
			variant: 'outlined',
			color: 'warning',
			class:
				'border-warning/50 text-on-warning-soft focus-visible:outline-on-warning-soft enabled:hover:bg-warning-soft'
		},
		{
			variant: 'ghost',
			color: 'warning',
			class:
				'text-on-warning-soft focus-visible:outline-on-warning-soft enabled:hover:bg-warning-soft'
		},
		// Success
		{
			variant: 'solid',
			color: 'success',
			class:
				'bg-success text-on-success focus-visible:outline-success enabled:hover:bg-success-hover'
		},
		{
			variant: 'soft',
			color: 'success',
			class:
				'bg-success-soft text-on-success-soft focus-visible:outline-on-success-soft enabled:hover:bg-success-soft-hover'
		},
		{
			variant: 'surface',
			color: 'success',
			class:
				'border-success/50 bg-success-soft text-on-success-soft focus-visible:outline-on-success-soft enabled:hover:bg-success-soft-hover'
		},
		{
			variant: 'outlined',
			color: 'success',
			class:
				'border-success/50 text-on-success-soft focus-visible:outline-on-success-soft enabled:hover:bg-success-soft'
		},
		{
			variant: 'ghost',
			color: 'success',
			class:
				'text-on-success-soft focus-visible:outline-on-success-soft enabled:hover:bg-success-soft'
		}
	]
});
