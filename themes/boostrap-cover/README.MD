## Description
Gatsby theme based on the  Bootstrap example [Cover page](https://getbootstrap.com/docs/4.4/examples/cover/)

### Dependencies (optional)

Are there any plugins that must be installed in order to make this plugin work? If so, please include a list of those plugins and links to their pages here.


## How to install

```
npm i gatsby-theme-bootstrap-cover
```

## When do I use this plugin?

When you want a single "splash" or "cover" page   

## Examples of usage

# To include
```javascript
module.exports = {
  plugins: [
    'gatsby-theme-bootstrap-cover'
  ]
};
```
Cover Page:

```jsx
import { CoverTitle} from "./CoverTitle";
import { SampleContent } from "./samplecontent";
import {CoverNavigation} from "./CoverNavigation";
<CoverPage
  footer={
    <p>
      Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by{" "}
      <a href="https://twitter.com/mdo">@mdo</a>.
    </p>
  }
  navigation={
      <CoverNavigation 
        brand={<CoverTitle>Cover</CoverTitle>}  
        navigation={
            [
                {active:true, children:"Home",url:"#"},
                {children:"Features",url:"#"},
                {children:"Contact",url:"#"}]
        }/>
  }
>
  <SampleContent />
</CoverPage>;
```
