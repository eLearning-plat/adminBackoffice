<script  lang="js">

import { mapState, mapActions } from 'vuex';
import { MoreHorizontal } from "lucide-vue-next";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { TabsContent } from "../../ui/tabs";
export default {
 components:{
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,Button,MoreHorizontal,
  TableRow,TabsContent,Badge,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 },
  props: {
    filter: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState('courses', ['courses'])
  },
  methods: {
    ...mapActions('courses', ['fetchCourses', 'deleteCourses','updateCourses']),
    async fetchData() {
      try {
        await this.fetchCourses();
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    },
    async editCourse(id) {
    try {
      const course = await this.$store.dispatch('courses/getCourseById', { courseId: id });
      if (course) {
      
        const updatedData = { ...course, state: true };
  
        await this.updateCourses({ id, updatedData });
        console.log('Course updated successfully:', updatedData);
      }
    } catch (error) {
      console.error('Error fetching course for editing:', error);
    }
  },
    deleteCourse(id) {
      this.deleteCourses(id); // Calls the deleteCourses action
    },
    viewDetails(id) {
      this.$router.push(`/courses/course-details/${id}`);
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<template>
  <TabsContent :value="filter">
    <Card>
      <CardHeader>
        <CardTitle>Courses</CardTitle>
        <CardDescription> Manage Courses. </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="hidden w-[100px] sm:table-cell">
                <span class="sr-only">img</span>
              </TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Satuts</TableHead>
              <TableHead>Created by</TableHead>
              <TableHead class="hidden md:table-cell"> Created at </TableHead>
              <TableHead>
                <span class="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="course in courses" :key="course.id">
              <TableCell class="hidden sm:table-cell">
                <img
                  alt="Product image"
                  class="aspect-square rounded-md object-cover"
                  height="64"
                  :src="course.image"
                  width="64"
                />
              </TableCell>
              <TableCell class="font-medium">
                {{ course.title }}
              </TableCell>
              <TableCell>
                <Badge variant="outline">
                  {{ course.state }}
                </Badge>
              </TableCell>
              <TableCell>
                {{ course.userId }} 
              </TableCell>
              <TableCell class="hidden md:table-cell">
                {{ course.createdAt }}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger as-child>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal class="h-4 w-4" />
                      <span class="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem @click="editCourse(course._id)">Accepted</DropdownMenuItem>
                    <DropdownMenuItem @click="deleteCourse(course._id)">Delete</DropdownMenuItem>
                    <DropdownMenuItem @click="viewDetails(course._id)">View details</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div class="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong>
          products
        </div>
      </CardFooter>
    </Card>
  </TabsContent>
</template>
