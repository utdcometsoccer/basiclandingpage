CoverNavigation:

```jsx
import { CoverTitle} from "../CoverTitle";
<CoverNavigation 
        brand={<CoverTitle>Cover</CoverTitle>}  
        navigation={
            [
                {active:true, children:"Home",url:"#"},
                {children:"Features",url:"#"},
                {children:"Contact",url:"#"}]
        }/>
```