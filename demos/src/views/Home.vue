<template>
  <div>
    <div>
      <ul>
        <li>
          <a href="#demos">demos</a>
        </li>
        <ul>
          <li>
            <a href="#search-box">search bar and schematic query visualizer</a>
          </li>
        </ul>
        <li>
          <a href="#repos">repos</a>
        </li>
        <li>
          <a href="#words">words</a>
        </li>
      </ul>
    </div>
    <hr />

    <h2 id="demos">Demos</h2>
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
        to parse the query and build an AQL query object. AQLQueryBuilder does
        not contain the code for the search bar, which is currently found in the
        <a
          href="https://github.com/HP4k1h5/hp4k1h5.github.io/tree/main/demos/src/components/search"
          >vue repo for this website</a
        >. It is not very abstracted, and requires use of a <code>$store</code>,
        but i would like to package it up with db and collections dropdowns as a
        standalone Vue component.
      </p>
      <p>
        This is primarily a demonstration of AQLQueryBuilder's capabilities, and
        a proof-of-concept regarding Boolean search interfaces.
      </p>
      <SearchBox />
    </div>
    <hr />

    <div>
      <h3 id="repos">personal code repositories</h3>
      <ul>
        <li>
          <a href="https://github.com/HP4k1h5">github</a>
        </li>
        <li>
          <a href="https://gitlab.com/HP4k1h5">gitlab</a>
        </li>
        <li>
          <a href="https://www.npmjs.com/~hpakles">npm</a>
        </li>
      </ul>
    </div>
    <hr />
    <div>
      <h3 id="words">words</h3>
      <ul>
        <li>
          <a href="https://toutcoule.blogspot.com">toutcoule</a>
        </li>
        <li>dev blog tbd</li>
      </ul>
    </div>
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

<style scoped>
.list-header {
  margin: 5px 5px;
  padding: 0px;
}
</style>
