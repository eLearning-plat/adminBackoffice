<script setup>
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define props
const props = defineProps({
  title: String,
  value: String,
  description: String,
});
</script>

<template>
  <Card>
    <CardHeader
      class="flex flex-row items-center justify-between space-y-0 pb-2"
    >
      <CardTitle class="text-sm font-medium"> {{ title }} </CardTitle>
      <DollarSign class="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div class="text-2xl font-bold">{{ value }}</div>
      <p class="text-xs text-muted-foreground">{{ description }}</p>
    </CardContent>
  </Card>
</template>
