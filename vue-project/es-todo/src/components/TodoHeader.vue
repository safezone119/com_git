<template>
  <header>
      <h1> {{this.$store.state.headerText}} </h1>
  </header>
</template>

<style scoped>
/* scoped(범위) 속성 현재 컴포넌트의 엘리먼트에만 적용  */
h1{
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.4rem;
}
</style>