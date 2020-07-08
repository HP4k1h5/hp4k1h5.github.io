<template>
  <div class="box">
    <span class="actions">
      <button>
        <span>expand</span>
      </button>
      <button>
        <span>minimize</span>
      </button>
      <button>
        <span>close</span>
      </button>
    </span>
    <Searchbar />
    <SchematicQuery />
    <Filters />
  </div>
</template>
<script>
import Searchbar from '@/components/search/Searchbar'
import SchematicQuery from '@/components/search/SchematicQuery'
import Filters from '@/components/search/Filters'

export default {
  components: {
    Searchbar,
    SchematicQuery,
    Filters,
  },
}
</script>

<style scoped>
.box {
  display: inline-block;
  min-width: 60%;
  width: 65%;
  max-width: 100%;
  margin: 1%;
  border: solid 1px black;
}
</style>
