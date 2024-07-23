<template>
  <nav v-for="item in items" :key="item.label" class="flex flex-col gap-2">
    <span
      :class="
        IsMobile
          ? 'text-blue-500 font-bold leading-none'
          : 'text-blue-500 font-bold leading-none hidden md:block'
      "
    >
      {{ item.label }}
    </span>

    <RouterLink
      v-for="subItem in item.items"
      :key="subItem.label"
      :to="subItem.link"
      class="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
      prefetch="false"
    >
      <component
        :is="getIconComponent(subItem.icon)"
        class="h-5 w-5"
      ></component>

      <span :class="IsMobile ? '' : 'hidden md:block'">{{
        subItem.section
      }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import { ref } from "vue";
import {
  UsersIcon,
  BookOpenIcon,
  InformationCircleIcon,
  NewspaperIcon,
  CubeIcon,
  PencilSquareIcon,
  CheckIcon,
  EnvelopeIcon,
  BanknotesIcon,
} from "@heroicons/vue/24/outline";
import { Package2 } from "lucide-vue-next";
import { RouterLink } from "vue-router";

export default {
  props: {
    IsMobile: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { IsMobile } = props;
    try {
      // Your setup logic here
      console.log("IsMobile prop value:", props.IsMobile);
      // More setup code...
    } catch (error) {
      console.error("Error in setup function:", error);
      // Handle the error appropriately
    }
    const icons = {
      UsersIcon,
      BookOpenIcon,
      InformationCircleIcon,
      NewspaperIcon,
      CubeIcon,
      PencilSquareIcon,
      CheckIcon,
      EnvelopeIcon,
      BanknotesIcon,
      Package2,
    };

    const items = ref([
      {
        label: "Management",
        items: [
          {
            section: "Dashboard",
            icon: "Package2",
            link: "/",
          },
          {
            section: "Users",
            icon: "UsersIcon",
            link: "/users",
          },
          {
            section: "Courses",
            icon: "BookOpenIcon",
            link: "/courses",
          },
        ],
      },
      {
        label: "Website",
        items: [
          {
            section: "Informations",
            icon: "InformationCircleIcon",
            link: "/informations",
          },
          {
            section: "News",
            icon: "NewspaperIcon",
            link: "/news",
          },
          {
            section: "Corners",
            icon: "CubeIcon",
            link: "/corners",
          },
          {
            section: "Blog",
            icon: "PencilSquareIcon",
            link: "/blog",
          },
          {
            section: "Reviews",
            icon: "CheckIcon",
            link: "/reviews",
          },
        ],
      },
      {
        label: "Community",
        items: [
          {
            section: "Messages",
            icon: "EnvelopeIcon",
            link: "/messages",
          },
          {
            section: "Charity",
            icon: "BanknotesIcon",
            link: "/charity",
          },
        ],
      },
    ]);

    const getIconComponent = (iconName) => icons[iconName];

    // Return data and methods to make them available to the template
    return {
      items,
      getIconComponent,
    };
  },
};
</script>
