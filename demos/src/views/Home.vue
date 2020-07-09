<template>
  <div>
    <div>
      <h4>demos</h4>
      <ul>
        <li>
          <a href="#search-box">search bar and schematic query visualizer</a>
        </li>
      </ul>
    </div>
    <hr />

    <h2>Demos</h2>
    Below are some works-in-progress and proofs-of-concept. Most are
    demonstrations of some package functionality.
    <br />
    <br />
    <br />

    <div>
      <h3 id="search-box">Search bar and schematic query visualizer</h3>
      <p>
        This demo uses
        <a href="https://www.npmjs.com/package/@hp4k1h5/aqlquerybuilder.js"
          >AQLQueryBuilder.js</a
        >
        to parse the query and build an AQL query object.
      </p>
      <SearchBox />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import SearchBox from '@/components/search/SearchBox.vue'

export default {
  name: 'Home',
  components: {
    SearchBox,
  },
}
</script>
