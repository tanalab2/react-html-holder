# React Html Holder

Storybook for React 内で、ただのHTMLを記述するために使用するヘルパー関数。

## Installation

yarn add https://github.com/tanalab2/react-html-holder

## How to Use

```
import React from "react";
import { storiesOf } from "@storybook/react";
import { htmlStory } from "react-html-holder";

storiesOf("hoge", module)
  .add(
    "hoge",
    htmlStory({
      html: "<p>hoge</p>",
      styles: { backgroundColor: "darkgray", color: "white" },
      onload: () => { console.log('hoge')}
    })
  );
```
