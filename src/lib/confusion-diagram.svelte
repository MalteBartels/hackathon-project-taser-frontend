<script>
	import { LayerCake, Svg } from 'layercake';

	import Line from '$lib/Line.svelte';
	import Area from '$lib/Area.svelte';
	import AxisX from '$lib/AxisX.svelte';
	import AxisY from '$lib/AxisY.svelte';

	const X_KEY = 'time';
	const Y_KEY = 'value';

	/** @type {{time: Number, value: Number}[]} */
	export let data = [];

	data.forEach((d) => {
		d[Y_KEY] = +d[Y_KEY];
	});
</script>

<div class="chart-container">
	<LayerCake
		padding={{ right: 10, bottom: 20, left: 25 }}
		x={X_KEY}
		y={Y_KEY}
		yDomain={[0, null]}
		{data}
	>
		<Svg>
			<AxisX />
			<AxisY ticks={4} />
			<Line />
			<Area />
		</Svg>
	</LayerCake>
</div>

<style>
	/*
	  The wrapper div needs to have an explicit width and height in CSS.
	  It can also be a flexbox child or CSS grid element.
	  The point being it needs dimensions since the <LayerCake> element will
	  expand to fill it.
	*/
	.chart-container {
		width: 100%;
		height: 100%;
	}
</style>
