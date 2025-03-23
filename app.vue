<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <!-- <NuxtWelcome /> -->
    {{ userStore.token }}
    <Button @click="userStore.setToken('123')">
      Click me
    </Button>
  </div>
</template>
