<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/utils/shadcn";

interface SkeletonProps {
	class?: HTMLAttributes["class"];
	style?: HTMLAttributes["style"];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div
    :style="props.style"
    :class="
      cn('animate-pulse rounded-md border border-foreground/30 bg-background/80 dark:border-foreground/40', props.class)
    "
  >
    <slot />
  </div>
</template>
