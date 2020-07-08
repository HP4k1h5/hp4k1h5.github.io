<template>
  <div class="box">
    <span class="actions">
      <button>
        <md-icon>expand</md-icon>
      </button>
      <button>
        <md-icon>minimize</md-icon>
      </button>
      <button>
        <md-icon>close</md-icon>
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
    Results,
  },
}
</script>

<style scoped>
.box {
  display: inline-block;
  margin: 1%;
  border: solid 1px black;
}
</style>
