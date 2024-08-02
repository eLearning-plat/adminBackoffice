<script setup lang="js">
import AreaChart from '@/components/chart/AreaChart.vue';
import LineChart from '@/components/chart/LineChart.vue';
import BarChart  from '@/components/chart/BarChart.vue';
import {
  ArrowUpRight,
  Package2,
  Search,
} from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import DataCard from "../components/data-card/DataCard.vue";
import UnverifiedCoursesTable from "../components/unverified-courses-table/UnverifiedCoursesTable.vue";
import ResentAddedUsers from "../components/recent-added-users/RecentAddedUsers.vue";

const data = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
  },
  {
    title: "Subscriptions",
    value: "+2350",
    description: "+180.1% from last month",
  },
  {
    title: "Sales",
    value: "+12,234",
    description: "+19% from last month",
  },
  {
    title: "Active Now",
    value: "+573",
    description: "+201 since last hour",
  },
];
</script>

<template>
  <div class="flex min-h-screen w-full pb-20 flex-col">
    <header
      class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
    >
      <div
        class="mt-6 hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
      >
        <h2
          href="#"
          class="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 class="h-6 w-6" />
          <span class="sr-only">Elearning</span>
        </h2>
        <h2
          href="#"
          class="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </h2>
      </div>
      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative">
            <Search
              class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Search products..."
              class="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
      </div>
    </header>
    <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <DataCard
          v-for="card in data"
          :title="card.title"
          :value="card.value"
          :description="card.description"
        />
      </div>
      <div class="flex flex-wrap gap-4 ">
    <Card class="flex-1 min-w-[300px] ">
      <CardHeader class="font-bold">
        Annual Distribution of Meetings and Courses
       </CardHeader>
        <CardContent class="px-0"> <AreaChart /></CardContent>
    </Card>
    <Card class="flex-1 min-w-[300px]">
      <CardHeader class="font-bold"> Blog Posts and Reactions Overview</CardHeader>
      <CardContent class="px-0"><LineChart /> </CardContent>
    </Card>
  </div>
      <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <UnverifiedCoursesTable/>
        <ResentAddedUsers/>
      </div>
      <Card>
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2 font-bold">
          Annual Breakdown of Course Categories by Type
     
        </CardHeader>
        <CardContent class="px-0"> <BarChart/></CardContent>
      </Card>
    </main>
  </div>
</template>
