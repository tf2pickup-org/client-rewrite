<script lang="ts">
import type { QueueSlot } from './models/queue-slot';

export let queueSlot: QueueSlot;
</script>

<div class="queue-slot">
  {#if queueSlot.player}
    {queueSlot.player.name}
  {/if}
</div>

<style lang="scss">
  .queue-slot {
    width: 290px;
  }
</style>
