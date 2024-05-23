<template>
  <div class="card">
    <DataTable 
      :value="data"
      sortField="subscribers"  :sortOrder="-1"
      v-model:filters="filters" filterDisplay="row"
      paginator :rows="50" :rowsPerPageOptions="[5, 10, 20, 50]"
      tableStyle="min-width: 40rem"
    >
      <Column field="name" sortable header="Name"></Column>
      <Column field="subscribers" :sortable="true" header="Subscribers"></Column>
      <Column field="verification" sortable header="verification">
        <template #body="{ data }">
          {{ data.verification }}
        </template>
        <template #filter="{ filterModel, filterCallback }">
            <InputText v-model="filterModel.value" type="text" @input="filterCallback()" class="p-column-filter" placeholder="Search by verification" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import RedditDataService from "@/services/RedditDataService";
  import DataTable from 'primevue/datatable'
  import InputText from 'primevue/inputtext';

  import Column from 'primevue/column'
  import { FilterMatchMode } from 'primevue/api';

  interface dataType {
    name: string;
    subscribers: number;
    verification: string;
  }
  const data = ref<dataType[]>([]);

  // get the data from api endpoint
  const getSubreddit = async () => {
    RedditDataService.getAll()
      .then(response => {
        data.value = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  onMounted(() => {
    getSubreddit(); // call when initial load
  });

  const filters = ref({
    verification: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
</script>
