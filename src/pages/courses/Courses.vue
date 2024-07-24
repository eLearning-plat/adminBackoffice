<script setup lang="js">
import { ListFilter, PlusCircle, Search } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import UsersTable from "@/components/users/users-table/UsersTable.vue";
import CoursesToolbar from "@/components/courses/courses-toolbar/CoursesToolbar.vue";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb.vue";

const links = [
  { id: 1, title: "Management", link: "/" },
];

const page = "Courses";
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div class="flex flex-col sm:gap-4 sm:py-4">
      <header
        class="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
      >
        <BreadCrumb :links="links" :page="page" />
        <div class="relative ml-auto flex-1 md:grow-0">
          <Search
            class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Search..."
            class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>
      </header>
      <main class="grid flex-1 items-start pb-36 gap-4 p-4 sm:px-6 md:gap-8">
        <CoursesToolbar />
      </main>
    </div>
  </div>
</template>
