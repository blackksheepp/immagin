<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-2xl">{data.name}</h1>
<img src="{data.url}" alt="{data.name}" class="w-40 h-auto rounded-sm">