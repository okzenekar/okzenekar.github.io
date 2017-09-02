<template>
	<div class="article">
   <slot></slot>
  </div>
</template>

<style lang="scss">
@import './scss/_variables';
.article {
  .custom-title{
    margin: 20px 0 40px 0;

  }
  h2 {
    vertical-align: top;
    display: table-cell;
    background: none;
    padding: 0;
    color: #CC333F;
    font-weight: bold;
    padding-bottom: 15px;
    &.block{
      display: block;
      padding-bottom: 0;
    }
  }
  p{
    margin: 0 0 20px 0;
    &.first{
      margin-top: 0;
    }
  }
  strong {
    display: inline-block;
    margin-bottom: 5px;
  }
  img {
    vertical-align: top;
    margin-bottom: 5px;
    @media #{$desktop} {
      max-width: 50%;
    }
    &.left {
      float: left;
      margin-right: 20px;
    }
    &.right {
      float: right;
      margin-left: 20px;
    }
  }

  .fullWidth{
    display: block;
    background: $blue;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    margin: 0 0 20px 0;
    -webkit-transition: background-color 0.1s linear;
    -ms-transition: background-color 0.1s linear;
    transition: background-color 0.1s linear;
    span{
      font-size: 30px;
      line-height: 20px;
    }
    &:hover{
      background: darken($blue, 10%)
    }
  }

  @media #{$desktop} {
    .article-video{
      display: inline-block;
      float: left;
      margin: 0 20px 0 0;
      width: 50%;

    }
  }
}
</style>
