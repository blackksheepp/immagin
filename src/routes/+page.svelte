<script lang="ts">
	import { goto } from '$app/navigation';
	import { createUploader } from '$lib/utils/uploadthing';
	import { UploadDropzone } from '@uploadthing/svelte';

	const uploader = createUploader('imageUploader', {
		onClientUploadComplete: (res) => {
            alert('Upload Completed! Redirecting...');
            const file = res[0];
            fetch('/api/ss/create', {
                method: 'POST',
                body: JSON.stringify({
                    name: file.name,
                    url: file.url
                })
            }).then((resp) => {
                if (resp.ok) {
                    resp.json().then((data) => {
                        goto(`/ss/${data.iid}`);
                    })
                }
            });

		},
		onUploadError: (error: Error) => {
			alert(`ERROR! ${error.message}`);
		}
	});
</script>

<div class="flex h-screen w-full select-none flex-col items-center justify-center">
	<p class="text-3xl font-bold">IMMAGINE</p>
	<UploadDropzone {uploader} />
</div>
