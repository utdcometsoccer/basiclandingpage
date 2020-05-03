CoverPage:

```jsx
import * as React from "react";
import { CoverTitle } from "../CoverTitle";
import { SampleContent } from "../samplecontent";
import { CoverNavigation } from "../CoverNavigation";

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
      navigation={[
        { active: true, children: "Home", url: "#" },
        { children: "Features", url: "#" },
        { children: "Contact", url: "#" },
      ]}
    />
  }
>
  <SampleContent />
</CoverPage>;
```
