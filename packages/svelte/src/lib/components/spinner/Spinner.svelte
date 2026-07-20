<script lang="ts">
	import { spinnerStyles, type SpinnerProps } from './index.ts';

	let {
		size = 'md',
		color = 'primary',
		variant = 'default',
		speed = 8,
		thickness = 4,
		class: className,
		...restProps
	}: SpinnerProps = $props();

	const base = $derived(spinnerStyles({ size, color, variant }));
</script>

{#if variant == 'default'}
	<div class="relative flex size-14">
		{#each Array(12) as _, i}
			<div
				class="spinner-bar-animation absolute top-[calc(46%)] left-[calc(37.5%)] h-[8%] w-[25%] rounded-full bg-primary-9"
				style="--bar-index: {i};"
			></div>
		{/each}
	</div>
{:else}
	rwasd
{/if}

<style>
	@keyframes fade-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0.15;
		}
	}

	.spinner-bar-animation {
		animation: fade-out 1.2s linear infinite;
		animation-delay: calc(-1.2s + (0.1s * var(--bar-index)));
		transform: rotate(calc(30deg * var(--bar-index))) translate(140%);
	}
</style>
