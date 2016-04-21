## example require js grunt almond

This is an example showing how to create a JS module using requirejs, almond and grunt

it is published in webcodegeeks.com

In order to generate it you just need to install the needed node modules

```{r, engine='bash', count_lines}
npm install
```

and configure it using grunt

```{r, engine='bash', count_lines}
grunt
```

then you can just open the index.html and everything should work just fine

for cleaning the output just type:

```{r, engine='bash', count_lines}
grunt clean
```

In the file main.js there is an example of shim configuration for Backbone and Underscore.