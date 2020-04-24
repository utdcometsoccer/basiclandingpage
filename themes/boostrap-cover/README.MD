## Description
Gatsby theme intended for corporate home pages

### Dependencies (optional)

[bootstrap](https://getbootstrap.com), [jQuery](https://jquery.com/), [popper.js](https://popper.js.org/)


## How to install

```
npm i @idahoedokpayi/gatsby-theme-bootstrap-cover
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
# Cover Page:

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
