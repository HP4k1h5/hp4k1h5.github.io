<template>
  <div>
    <h6>personal site for hp4k1h5 .. robertwalks@gmail.com</h6>
    <div>
      <ul>
        <li>
          <a href="#schematic">schematic query search bar</a>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <h3>demos</h3>
    <div>
      <h4 id="schematic">schematic query search bar</h4>
      <SchematicQuery />
    </div>
  </div>
</template>

<script>
import SchematicQuery from '@/components/SchematicQuery.vue'

export default {
  name: 'Home',
  components: {
    SchematicQuery,
  },
}
</script>
