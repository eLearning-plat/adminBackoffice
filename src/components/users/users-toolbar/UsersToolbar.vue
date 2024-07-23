<script setup>
import { ListFilter, PlusCircle, Search } from "lucide-vue-next";
import { Button } from "../../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Input } from "../../ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../ui/breadcrumb";

import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import UsersTable from "./../users-table/UsersTable.vue";

const filter =["all", "students", "teachers", "admins"];

</script>

<template>
  <Tabs default-value="all">
    <div class="flex items-center">
      <TabsList>
        <TabsTrigger value="all"> All </TabsTrigger>
        <TabsTrigger value="students"> Students </TabsTrigger>
        <TabsTrigger value="teachers"> Teachers </TabsTrigger>
        <TabsTrigger value="admins" class="hidden sm:flex">
          Admins
        </TabsTrigger>
      </TabsList>
      <div class="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="sm" class="h-7 gap-1">
              <ListFilter class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem checked> Students </DropdownMenuItem>
            <DropdownMenuItem> Teachers </DropdownMenuItem>
            <DropdownMenuItem> Admins </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" class="h-7 gap-1">
          <PlusCircle class="h-3.5 w-3.5" />
          <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add User
          </span>
        </Button>
      </div>
    </div>
    <UsersTable :filter="'all'"/>
    <UsersTable :filter="'students'"/>
    <UsersTable :filter="'teachers'"/>
    <UsersTable :filter="'admins'"/>
  </Tabs>
</template>
