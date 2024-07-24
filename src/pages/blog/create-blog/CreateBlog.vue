<script setup>
import { ref } from "vue";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "../../../components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoreHorizontal } from "lucide-vue-next";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb.vue";
import { Card, CardContent, CardFooter } from "../../../components/ui/card";
import { Switch } from "../../../components/ui/switch";
import { Label } from "../../../components/ui/label";

const fields = ref([]);

function addField(type) {
  fields.value.push({ type: type, value: "" });
}

// Example function to save fields to a table
function saveFields() {
  // Here you would typically send the fields to a backend server
  // For demonstration, we'll just log them to the console
  console.log("Saving fields:", fields.value);
}

function deleteLastField() {
  fields.value.pop();
}

function handleFileChange(event, field) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (e) => {
      field.value = e.target.result; // This is the base64 encoded image
    };
    reader.readAsDataURL(file);
  }
}

const links = [
  { id: 1, title: "Management", link: "" },
  { id: 2, title: "blog", link: "" },
];

const page = "create blog";

const isOn = ref(false);

const checkAirplaneMode = () => {
  console.log(isOn);
};
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
        <div class="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            class="h-7 gap-1"
            @click="saveFields"
            >Save blog</Button
          >
          <Switch
            id="airplane-mode"
            :checked="isOn"
            @update:checked="isOn = $event"
          />
          <Label>Preview: {{ isOn ? "On" : "Off" }}</Label>
        </div>
        <Card>
          <CardContent v-if="!isOn" class="py-10 space-y-5">
            <div v-for="(field, index) in fields" :key="index">
              <template v-if="field.type === 'title'">
                <Input type="input" v-model="field.value" />
              </template>
              <template v-else-if="field.type === 'text'">
                <Textarea
                  v-model="field.value"
                  placeholder="Enter text"
                ></Textarea>
              </template>
              <template v-else-if="field.type === 'image'">
                <Input
                  v-if="!field.value"
                  type="file"
                  v-model="field.value"
                  @change="handleFileChange($event, field)"
                />
                <img v-else :src="field.value" alt="image" class="h-96 w-50">
              </template>
            </div>
          </CardContent>
          <CardContent v-else class="py-10 space-y-5">
            <div v-for="(field, index) in fields" :key="index">
              <template v-if="field.type === 'title'">
                <h2 class="text-4xl font-extrabold tracking-tight lg:text-5xl">{{ field.value }}</h2>
              </template>
              <template v-else-if="field.type === 'text'">
                <p>{{ field.value }}</p>
              </template>
              <template v-else-if="field.type === 'image'" class="flex mx-auto ">
                <img :src="field.value" alt="image" class="h-96 w-50"/>
              </template>
            </div>
          </CardContent>
          <CardFooter class="flex flex-row-reverse ">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button>Add Field</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Choose field type</DropdownMenuLabel>
                <DropdownMenuItem @click="addField('title')"
                  >Title</DropdownMenuItem
                >
                <DropdownMenuItem @click="addField('text')"
                  >Text Area</DropdownMenuItem
                >
                <DropdownMenuItem @click="addField('image')"
                  >Image</DropdownMenuItem
                >
                <!-- Add more options as needed -->
              </DropdownMenuContent>
            </DropdownMenu>
            <Button @click="deleteLastField" class="mr-4">delete Field</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  </div>
</template>
