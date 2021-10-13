<script lang="ts">
import { gameClasses, queue } from './queue.store';
import QueueSlot from './QueueSlot.svelte';
</script>

{#if $queue && $gameClasses}
  {#each $gameClasses as gameClass}
    <div class="queue-game-class-slots">
      <span class="game-class-caption">{gameClass}</span>

      {#each $queue.slots.filter(s => s.gameClass === gameClass) as queueSlot}
        <QueueSlot {queueSlot} />
      {/each}
    </div>
  {/each}
{/if}
