<script lang="ts">
import { gameClasses, queue } from './queue.store';
import QueueSlot from './QueueSlot.svelte';
</script>

<div class="queue-classes">
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
</div>

<style lang="scss">
  .queue-classes {
    display: flex;
    flex-flow: row nowrap;

    .queue-game-class-slots {
      display: flex;
      flex-flow: column nowrap;
      text-align: center;

      .game-class-caption {
        font-weight: bold;
      }
    }
  }
</style>
