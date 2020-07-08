<template>
  <div>
    <h6>personal site for hp4k1h5 .. robertwalks@gmail.com</h6>
    <div>
      <h4>demos</h4>
      <ul>
        <li>
          <a href="#search-box">search bar and schematic query visualizer</a>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <hr />

    <h3>demos</h3>
    <div>
      <h4 id="search-box">search bar and schematic query visualizer</h4>
      <SearchBox />
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/search/SearchBox.vue'

export default {
  name: 'Home',
  components: {
    SearchBar,
    SchematicQuery,
  },
}
</script>
